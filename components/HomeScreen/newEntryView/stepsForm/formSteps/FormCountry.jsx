import React, { Component, useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../../../../utils";

class Formulario extends Component {
  state = {
    select1: "Departamento",
    select2: "Ciudad",
    modalVisible: false,
    modalOptions: [],
    modalSelect: "",
  };

  openModal = (select) => {
    let modalOptions = [];
    switch (select) {
      case "select1":
        modalOptions = ["Dept 1", "Dept 2", "Dept 3"];
        break;
      case "select2":
        modalOptions = ["City 1", "City 2", "City 3"];
        break;
      default:
        break;
    }
    this.setState({ modalVisible: true, modalOptions, modalSelect: select });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Selects */}
        <TouchableOpacity
          style={styles.select}
          onPress={() => this.openModal("select1")}
        >
          <Text style={styles.selectText}>{this.state.select1}</Text>
          <Ionicons
            name="chevron-down-outline"
            size={24}
            color={colors.placeholderColor}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.select}
          onPress={() => this.openModal("select2")}
        >
          <Text style={styles.selectText}>{this.state.select2}</Text>
          <Ionicons
            name="chevron-down-outline"
            size={24}
            color={colors.placeholderColor}
          />
        </TouchableOpacity>

        {/* Modal */}
        <Modal visible={this.state.modalVisible} animationType="slide">
          <View style={styles.modal}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => this.closeModal()}
            >
              <Ionicons
                name="md-close"
                size={32}
                color={colors.placeholderColor}
              />
            </TouchableOpacity>
            {this.state.modalOptions.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => {
                  // Aquí actualizamos el estado del select correspondiente con la opción seleccionada
                  this.setState({
                    [this.state.modalSelect]: option,
                    modalVisible: false,
                    modalOptions: [],
                    modalSelect: "",
                  });
                }}
              >
                <Text style={styles.modalOption}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  select: {
    backgroundColor: colors.mainBackgroundColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  selectText: {
    fontSize: 16,
    fontFamily: "Volks-Serial-Medium",
    color: colors.placeholderColor,
  },
  modal: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    margin: 16,
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    top: 50,
    right: 30,
  },
  modalOption: {
    fontSize: 20,
    marginBottom: 16,
  },

  input: {
    backgroundColor: colors.mainBackgroundColor,
    height: 50,
    paddingLeft: 20,
    marginBottom: 10,
    borderRadius: 10,
    width: "100%",
    fontFamily: "Volks-Serial-Medium",
    fontSize: 16,
    fontWeight: "normal",
  },
  boxForm: {
    marginBottom: 10,
  },
});

export default Formulario;
