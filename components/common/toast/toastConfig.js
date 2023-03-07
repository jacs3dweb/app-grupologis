import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

const Toast = ({ message, isVisible }) => {
  const [showToast, setShowToast] = useState(isVisible);

  useEffect(() => {
    setShowToast(isVisible);
    const timer = setTimeout(() => setShowToast(false), 2000); // 2 segundos
    return () => clearTimeout(timer);
  }, [isVisible]);

  if (showToast) {
    return (
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>{message}</Text>
      </View>
    );
  }
  return null;
};

export default Toast;
