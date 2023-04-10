import React from "react";
import { View, TextInput, Button, Text } from "react-native";
import FormStepThree from "./formSteps/FormStepThree";

const StepThree = ({ formData, onComplete }) => {
  const [value, setValue] = React.useState("");

  const handlePress = () => {
    onComplete({ stepOneData: value });
  };

  return (
    <View>
      <FormStepThree />
    </View>
  );
};

export default StepThree;
