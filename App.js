import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";


import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Toast from 'react-native-toast-message';

// SplashScreen.preventAutoHideAsync();

// Import Views

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import BusinessEmployeeLogin from "./components/LoginScreen/BusinessEmployeeLogin";
import CodeAuth from "./components/LoginScreen/CodeAuth";
import BusinessEntry from "./components/LoginScreen/BusinessEntry";
import DownloadView from "./components/HomeScreen/DownloadView";
import ClaimsView from "./components/HomeScreen/ClaimsView";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  console.log("🚀 ~ reloading");

  return (
    <NavigationContainer>
      <StatusBar style="auto" hidden={true} />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="BusinessEmployeeLogin"
          component={BusinessEmployeeLogin}
        />
        <Stack.Screen name="CodeAuth" component={CodeAuth} />
        <Stack.Screen name="BusinessEntry" component={BusinessEntry} />
        <Stack.Screen name="DownloadView" component={DownloadView}/>
        <Stack.Screen name="ClaimsView" component={ClaimsView}/>
      </Stack.Navigator>
      <Toast/>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
