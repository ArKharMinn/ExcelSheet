import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import tw from "twrnc";

const DataList = ({ data }: any) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(data);
  }, []);
  return (
    <View style={tw`top-9 p-2`}>
      <Text style={tw`p-2 text-lg font-bold`}>
        Result Count : {list.length}
      </Text>
      <ScrollView contentContainerStyle={tw`mt-2`}>
        <View style={tw`pb-20`}>
          {list.map((item: any, index: number) => (
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
        </View>
      </ScrollView>
    </View>
  );
};

export default DataList;
