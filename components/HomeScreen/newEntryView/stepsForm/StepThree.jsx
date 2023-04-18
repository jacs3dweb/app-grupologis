import React from "react";
import { View, TextInput, Button, Text } from "react-native";
import FormStepThree from "./formSteps/FormStepThree";
import GLButton from "../../../common/buttons/GLButton";
import { widthPercentageToPx } from "../../../../utils";

const StepThree = ({ formData, onComplete }) => {
  const [value, setValue] = React.useState("");

  const handlePress = () => {
    onComplete({ stepOneData: {} });
  };

  return (
    // salario
    // valor salario
    // auxilio bon
    // auxilio bon valor
    // dotacion
    <View>
      <FormStepThree />
      <GLButton
        onPressAction={handlePress}
        type="default"
        placeholder={"Siguiente"}
        width={widthPercentageToPx(70)}
      />
    </View>
  );
};

export default StepThree;
