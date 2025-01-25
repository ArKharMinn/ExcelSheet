import DataList from "@/components/DataList";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";

const AllList = () => {
  const data = useSelector((state: any) => state.data);
  return (
    <View style={tw`pb-20`}>
      <DataList data={data} />
    </View>
  );
};

export default AllList;
