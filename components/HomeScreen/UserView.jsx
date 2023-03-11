import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import Layout from "../layout/Layout";
import authContext from "../../context/auth/authContext";
import UserInfo from "./profileView/UserInfo";
import UserForm from "./profileView/UserForm";
import { heightPercentageToPx, widthPercentageToPx } from "../../utils";

const UserView = ({ props }) => {
  const { userData, updateUser } = useContext(authContext);
  const [data, setData] = useState({ ...userData });

  const handleChangeInput = (field, value) => {
    setData({
      ...data,
      [field]: value,
    });
  };

  const handleUpdateUser = () => {
    updateUser(data);
  };
  return (
    <Layout props={{ ...props }}>
      <ScrollView style={styles.userView}>
        <UserInfo data={data} />
        <UserForm
          userData={data}
          handleChange={handleChangeInput}
          handleUpdateUser={handleUpdateUser}
        />
      </ScrollView>
    </Layout>
  );
};

export default UserView;

const styles = StyleSheet.create({
  userView: {
    height: heightPercentageToPx(100),
    width: widthPercentageToPx(100),
  },
});
