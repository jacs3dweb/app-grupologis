import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Platfor,
  Text,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import React, { useContext, useState } from "react";
import {
  colors,
  heightPercentageToPx,
  images,
  widthPercentageToPx,
} from "../../utils";
import authContext from "../../context/auth/authContext";
import NotificationForm from "../HomeScreen/notificationForm/FormNotification";

const Header = ({ }) => {
  const { userData } = useContext(authContext);
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.notbar}>
      <View style={styles.notbarInfoUser}>
        <View style={styles.userImgContainer}>
          <Image style={styles.userImg} source={{ uri: images.userImage }} />
          <View style={styles.onlineIndicator} />
        </View>
        <View style={styles.infoUser}>
          <Text style={styles.hello}>Hola!</Text>
          <Text style={styles.nameUser}>{userData.name}</Text>
        </View>
      </View>
      <View>
        <Pressable onPress={() => setModal(!modal)}>
          <Ionicons name="md-notifications-outline" size={30} color="white" />
        </Pressable>
      </View>
      {modal && (
        <Modal
          animationType="slide" 
          transparent={true}

        >
          <View style={styles.modalContainer}>
            <NotificationForm
              closeM={()=> setModal(false)}
            />
          </View>

        </Modal>




      )}
    </View>
  );
};

export default Header;

// ...Platform.select({
//       ios: {
//         backgroundColor: "red",
//       },
//       android: {
//         backgroundColor: "blue",
//       },
//     }),

const styles = StyleSheet.create({
  notbar: {
    width: widthPercentageToPx(90),
    height: heightPercentageToPx(9),
    marginTop: 60,
    marginBottom: 10,
    overflow: "visible",
    backgroundColor: colors.mainBlue,
    borderRadius: 9,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },

  notbarInfoUser: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  hello: {
    color: colors.light,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },

  nameUser: {
    color: colors.light,
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    lineHeight: 17,
  },

  infoUser: {
    marginLeft: 10,
  },

  userImg: {
    height: heightPercentageToPx(10),
    width: widthPercentageToPx(20),
    height: 45,
    width: 45,
  },
  onlineIndicator: {
    position: "absolute",
    bottom: -3,
    right: -3,
    height: 16,
    width: 16,
    borderRadius: 50,
    borderWidth: 2.5,
    borderColor: colors.mainBlue,
    backgroundColor: colors.green,
    zIndex: 9,
  },
  modalContainer: {
    alignItems: "center",
    top: 55,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    transform: [{ translateY: 55 }],
    width: widthPercentageToPx(90),
    height: heightPercentageToPx(90),
    left: 20,
  },
});
