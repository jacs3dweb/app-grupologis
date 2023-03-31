import React from "react";
import { View, TextInput, Button, Text } from "react-native";

const StepThree = ({ formData, onComplete }) => {
  const [value, setValue] = React.useState("");

  const handlePress = () => {
    onComplete({ stepOneData: value });
  };

  return (
    <View>
      <TextInput value={value} onChangeText={setValue} />
      <Text>holaa3</Text>
    </View>
  );
};

export default StepThree;
