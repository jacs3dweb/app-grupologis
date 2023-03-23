import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FormInput from "./FormInput";
import GLButton from "../../common/buttons/GLButton";
import { widthPercentageToPx } from "../../../utils";

const UserForm = ({ userData, handleChange, handleUpdateUser }) => {
  return (
    <View style={styles.formContainer}>
      <FormInput
        name="name"
        label={"Nombre"}
        value={userData.name}
        onChange={handleChange}
      />
      <FormInput
        type="numeric"
        name="identification"
        label={"Identificación"}
        value={userData.identification}
        onChange={handleChange}
      />
      <FormInput
        name="business"
        label={"Empresa"}
        value={userData.business?.label}
        onChange={handleChange}
        disabled={true}
      />
      <FormInput
        name="direction"
        label={"Dirección"}
        value={userData.direction}
        onChange={handleChange}
        disabled={false}
      />
      <FormInput
        name="email"
        type="email-address"
        label={"Email"}
        value={userData.email}
        onChange={handleChange}
        disabled={false}
      />
      <FormInput
        type="phone-pad"
        name="phone"
        label={"Teléfono"}
        value={userData.phone}
        onChange={handleChange}
        disabled={false}
      />
      <GLButton
        type={"default"}
        placeholder="Actualizar"
        width={widthPercentageToPx(70)}
        onPressAction={handleUpdateUser}
      />
      <GLButton
        type={"second"}
        placeholder="Cancelar"
        width={widthPercentageToPx(70)}
        onPressAction={() => null}
      />
    </View>
  );
};

export default UserForm;

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
