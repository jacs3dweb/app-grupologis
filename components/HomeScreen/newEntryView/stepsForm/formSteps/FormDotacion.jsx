import React, { Component } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { colors, heightPercentageToPx } from "../../../../../utils";
import { Ionicons } from "@expo/vector-icons";

class FormDotacion extends Component {
  state = {
    selGuantes: "Talla guantes",
    selOverol: "Talla overol",
    selCamisa: "Talla Camisa",
    tallPantalon: "",
    tallZapatos: "",
  };

  openModal = (select) => {
    let modalOptions = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
    switch (select) {
      case "selGuantes":
        modalOptions = modalOptions;
        break;
      case "selOverol":
        modalOptions = modalOptions;
        break;
      case "selCamisa":
        modalOptions = modalOptions;
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
        <View style={styles.boxForm}>
          <TouchableOpacity
            style={styles.select}
            onPress={() => this.openModal("selGuantes")}
          >
            <Text style={styles.selectText}>{this.state.selGuantes}</Text>
            <Ionicons
              name="chevron-down-outline"
              size={24}
              color={colors.placeholderColor}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.select}
            onPress={() => this.openModal("selOverol")}
          >
            <Text style={styles.selectText}>{this.state.selOverol}</Text>
            <Ionicons
              name="chevron-down-outline"
              size={24}
              color={colors.placeholderColor}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.select}
            onPress={() => this.openModal("selCamisa")}
          >
            <Text style={styles.selectText}>{this.state.selCamisa}</Text>
            <Ionicons
              name="chevron-down-outline"
              size={24}
              color={colors.placeholderColor}
            />
          </TouchableOpacity>

          <TextInput
            placeholder="Talla pantalon"
            onChangeText={(text) => {
              this.setState({ tallPantalon: text }, () => {
                this.handleSelection();
              });
            }}
            placeholderTextColor={colors.placeholderColor}
            style={styles.input}
            value={this.state.tallPantalon}
          />

          <TextInput
            placeholder="Talla zapatos"
            onChangeText={(text) => {
              this.setState({ tallZapatos: text }, () => {
                this.handleSelection();
              });
            }}
            placeholderTextColor={colors.placeholderColor}
            style={styles.input}
            value={this.state.tallZapatos}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxForm: {
    marginBottom: 10,
  },
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
  selectContainer: {
    marginTop: heightPercentageToPx(5),
  },
  modalOptionBox: {
    fontSize: 15,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.purpleIcons,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalOption: {
    fontSize: 15,
    fontFamily: "Volks-Serial-Medium",
  },
});

export default FormDotacion;
