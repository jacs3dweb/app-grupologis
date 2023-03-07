import { StyleSheet, View } from "react-native";
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Toast from "react-native-toast-message";

// SplashScreen.preventAutoHideAsync();

// Import Views

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import BusinessEmployeeLogin from "./components/LoginScreen/BusinessEmployeeLogin";
import CodeAuth from "./components/LoginScreen/CodeAuth";
import BusinessEntry from "./components/LoginScreen/BusinessEntry";
import DownloadView from "./components/HomeScreen/DownloadView";
import ClaimsView from "./components/HomeScreen/ClaimsView";
import NewsView from "./components/HomeScreen/NewsView";

const Stack = createNativeStackNavigator();
// const BottomTab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Volks-Serial-Light": require("./assets/fonts/VolksSerialLight.ttf"),
    "Volks-Bold": require("./assets/fonts/Volks-Serial-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  console.log("🚀 ~ reloading");

  return (
    <NavigationContainer>
      <StatusBar style="auto" hidden={false} />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="BusinessEmployeeLogin"
          component={BusinessEmployeeLogin}
        />
        <Stack.Screen name="CodeAuth" component={CodeAuth} />
        <Stack.Screen name="BusinessEntry" component={BusinessEntry} />

        <Stack.Screen name="DownloadView" component={DownloadView} />
        <Stack.Screen name="ClaimsView" component={ClaimsView} />
        <Stack.Screen name="NewsView" component={NewsView} />
      </Stack.Navigator>

      <Toast />
    </NavigationContainer>
  );
}

{
  /* <BottomTab.Navigator>
        <BottomTab.Screen name="Download" component={DownloadView} />
        <BottomTab.Screen name="Claims" component={ClaimsView} />
        <BottomTab.Screen name="News" component={NewsView} />
      </BottomTab.Navigator> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
