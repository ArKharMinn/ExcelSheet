import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import AntDesign from "@expo/vector-icons/AntDesign";

const Icon = () => {
  return (
    <View style={tw`items-center`}>
      <View style={tw`flex-row items-center gap-1`}>
        <AntDesign name="earth" size={20} style={tw`text-blue-500`} />
        <Text style={tw`text-[22px] font-bold text-blue-500`}>ExcelSheet</Text>
      </View>
      <Text style={tw`text-blue-500 text-[10px]`}>data</Text>
    </View>
  );
};

export default Icon;
