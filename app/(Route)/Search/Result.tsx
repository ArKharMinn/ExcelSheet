import { useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";

const Result = () => {
  const { region, township, code, name, gender } = useLocalSearchParams();
  const data = useSelector((state: any) => state.data);

  const filteredResult = useMemo(() => {
    return data.filter((item: any) => {
      return (
        (item.region === region || !region) &&
        (item.address === township || !township) &&
        (item.code === code || !code) &&
        (item.name === name || !name) &&
        (item.Gender === gender || !gender)
      );
    });
  }, [data, region, township, code, name, gender]);

  return (
    <View style={tw`top-9 p-2`}>
      <Text style={tw`p-2 text-lg font-bold`}>
        Result Count : {filteredResult.length}
      </Text>
      <ScrollView contentContainerStyle={tw`mt-2 pb-20`}>
        {filteredResult.map((item: any, index: number) => (
          <View
            key={index}
            style={tw`flex-row border rounded-xl p-3 m-2 border-blue-500`}
          >
            <View style={tw`w-1/3 gap-3`}>
              <Text>Region:</Text>
              <Text>Township:</Text>
              <Text>IOM Code:</Text>
              <Text>Client Name:</Text>
              <Text>Gender:</Text>
              <Text>Testing place:</Text>
              <Text>Father Name:</Text>
              <Text>Migrant:</Text>
              <Text>MaritalStatus :</Text>
              <Text>Age:</Text>
            </View>
            <View style={tw`flex-1 gap-3`}>
              <Text>{item.Address}</Text>
              <Text>{item.Address}</Text>
              <Text>{item.ClientNo}</Text>
              <Text>{item.ClientName}</Text>
              <Text>{item.Gender}</Text>
              <Text>{item.HabitualPlace}</Text>
              <Text>{item.FatherName}</Text>
              <Text>{item.Migrant}</Text>
              <Text>{item.MaritalStatus}</Text>
              <Text>{item.Age}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Result;
