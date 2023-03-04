import { Image, Modal, Pressable, StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../utils";

const DownloadableCard = ({ title, desc, image, id }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.scrollStyle}>
      <Image style={styles.certificadoImage} source={{ uri: image }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{desc}</Text>
      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.downloadButton}>
          <Text style={{ color: colors.white }}>Descargar</Text>
        </View>
      </Pressable>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalView}>Descarga Completada</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>

  );
};

export default DownloadableCard;

const styles = StyleSheet.create({
  scrollStyle: {
    width: 180,
    height: 270,
    backgroundColor: colors.white,
    borderRadius: 17,
    padding: 15,
    alignItems: "center",
  },
  certificadoImage: {
    marginBottom: 30,
    height: 90,
    width: 90,
  },
  title: {
    ...getFontStyles(15),
    fontFamily: "Poppins-Bold",
  },
  description: {
    fontFamily: "Poppins-Regular",
    color: colors.descriptionColors,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 5,
    marginTop: 5,
    ...getFontStyles(11, 0.5, 0.9),
  },
  downloadButton: {
    backgroundColor: colors.buttonsColor,
    fontFamily: "Poppins-Regular",
    height: heightPercentageToPx(6),
    width: widthPercentageToPx(25),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
},
modalView: {
    width: 350,
    height: 5,
    margin: 20,
    top:300,
    backgroundColor: colors.descarga ,
    borderRadius: 20,
    padding: 25,
    alignItems: "flex-start",
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
},
button: {
    borderRadius: 20,
    
},
buttonClose: {
    backgroundColor: '#2196F3',
},
modalText: {
  ...getFontStyles(12),
    fontFamily: "Poppins-Bold",
    color: colors.white
},
});
