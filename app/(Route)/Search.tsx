import Icon from "@/components/Icon";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { Picker } from "@react-native-picker/picker";

const Search = () => {
  const [region, setRegion] = useState("");
  const [township, setTownship] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");

  const searchBtn = () => {
    if (region || township || code || name || gender) {
      router.push({
        pathname: "/Search/Result",
        params: { region, township, code, name, gender },
      });
    }
  };

  const radioButtons = [
    { label: "Option 1", value: "Male" },
    { label: "Option 2", value: "Female" },
  ];

  return (
    <View style={tw`top-9 p-1 gap-6`}>
      <Icon />

      <View style={tw`border border-blue-500 gap-8 rounded-xl p-5`}>
        <View style={tw``}>
          <View style={tw`w-2/3 gap-4`}>
            <View style={tw`gap-2`}>
              <Text>Region</Text>
              <TextInput
                value={region}
                onChangeText={setRegion}
                style={tw`border left-3 border-blue-500  rounded-xl`}
              />
            </View>
            <View style={tw`gap-2`}>
              <Text>Township</Text>
              <TextInput
                value={township}
                onChangeText={setTownship}
                style={tw`border left-3 border-blue-500  rounded-xl`}
              />
            </View>
            <View style={tw`gap-2`}>
              <Text>IOM Code</Text>
              <TextInput
                value={code}
                onChangeText={setCode}
                style={tw`border left-3 border-blue-500  rounded-xl`}
              />
            </View>
            <View style={tw`gap-2`}>
              <Text>Client Name</Text>
              <TextInput
                value={name}
                onChangeText={setName}
                style={tw`border left-3 border-blue-500  rounded-xl`}
              />
            </View>
            <View style={tw`gap-2`}>
              <Text>Gender</Text>
              <Picker
                className="border border-blue-500"
                selectedValue={gender}
                onValueChange={(itemValue) => setGender(itemValue)}
              >
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
            </View>
          </View>
        </View>
        <View style={tw`items-center`}>
          <TouchableOpacity
            onPress={searchBtn}
            style={tw`bg-blue-500 rounded-xl`}
          >
            <Text style={tw`text-white px-15 py-2 text-lg`}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Search;
