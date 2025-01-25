import React, { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import XLSX from "xlsx";
import { useDispatch, useSelector } from "react-redux";
import { clear, post } from "@/redux/action";
import Icon from "@/components/Icon";
import { router, Tabs } from "expo-router";
import List from "@/components/List";

const Index = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data);

  const handleFileUpload = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      if (res.canceled) return;

      const fileUri = res.assets[0].uri;

      const fileContent = await FileSystem.readAsStringAsync(fileUri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const wb = XLSX.read(fileContent, { type: "base64" });
      const ws = wb.Sheets[wb.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(ws);

      dispatch(post(data));
    } catch (err) {
      console.error("File selection error:", err);
      Alert.alert("Error", "Failed to load the file.");
    }
  };

  const clearBtn = () => {
    dispatch(clear());
  };

  return (
    <View style={tw`flex-1 justify-center gap-10`}>
      <Icon />

      <TouchableOpacity
        onPress={() => router.push("/(Route)/AllList")}
        disabled={data.length === 0}
        style={tw`absolute bottom-11 right-4 p-6 bg-blue-500 rounded-full ${
          data.length === 0 ? "bg-gray-300" : ""
        }`}
      >
        <List />
      </TouchableOpacity>

      <View style={tw`flex-row items-center justify-between px-11`}>
        <View style={tw`items-center`}>
          <FontAwesome5 name="users" size={24} color="black" />
          <Text style={tw`text-blue-500 font-bold text-[10px]`}>
            Client Search
          </Text>
        </View>
        <View>
          {data.length !== 0 && (
            <TouchableOpacity
              onPress={clearBtn}
              style={tw`bg-red-500 py-2 px-3 rounded-xl`}
            >
              <Text style={tw`text-white`}>Clear Data</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={tw`items-center gap-8`}>
        <View style={tw`bg-pink-200 w-1/2 items-center p-3 rounded-xl`}>
          <Text style={tw`font-bold`}>Total Client</Text>
          {data.length > 0 ? (
            <View>
              <Text style={tw`font-bold`}>{data.length}</Text>
            </View>
          ) : (
            <View>
              <Text style={tw`font-bold`}>--</Text>
            </View>
          )}
        </View>

        <View style={tw`flex-row items-center gap-16`}>
          <TouchableOpacity
            onPress={handleFileUpload}
            style={tw`bg-yellow-400 items-center p-5 w-1/4 rounded-xl`}
          >
            <Text style={tw`font-bold`}>Input</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={data.length === 0}
            onPress={() => router.push(`/(Route)/Search`)}
            style={tw`w-1/4 items-center bg-green-400 p-5 rounded-xl ${
              data.length === 0 ? "bg-gray-300" : ""
            }`}
          >
            <Text style={tw`font-bold`}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Index;
