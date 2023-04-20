import React from "react";
import { View, TextInput, Button, Text, Switch } from "react-native";
import FormStepThree from "./formSteps/FormStepThree";
import GLButton from "../../../common/buttons/GLButton";
import { widthPercentageToPx } from "../../../../utils";
import FormDotacion from "./formSteps/FormDotacion";

const StepThree = ({ formData, onComplete }) => {
  const [value, setValue] = React.useState("");
  const [dotacion, setDotacion] = useState(false);

  const toggleDotacion = () => setDotacion((previousState) => !previousState);

  const handlePress = () => {
    onComplete({ stepOneData: {} });
  };

  return (
    // salario -
    // valor salario -
    // centro costos -
    // auxilio bon
    // auxilio bon valor
    // dotacion
    <View>
      <FormStepThree />
      <Text>Doatacion Aspirante</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={dotacion ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleDotacion}
        value={dotacion}
      />
      {dotacion && <FormDotacion />}
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
