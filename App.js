import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";

// Import Views

import LoginScreen from "./screens/LoginScreen";
import BusinessEmployeeLogin from "./components/LoginScreen/BusinessEmployeeLogin";
import CodeAuth from "./components/LoginScreen/CodeAuth";
import BusinessEntry from "./components/LoginScreen/BusinessEntry";
import DownloadView from "./components/HomeScreen/DownloadView";
import ClaimsView from "./components/HomeScreen/ClaimsView";
import NewsView from "./components/HomeScreen/NewsView";

// Import components

import Footer from "./components/common/Footer";
import Toast from "react-native-toast-message";
import { StatusBar } from "expo-status-bar";
import { SuccessToast, ErrorToast } from "./components/common/toast/Toasts";

// Import States
import AuthState from "./context/auth/authState";
import NewsState from "./context/news/newsState";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const toastConfig = {
  success: (props) => <SuccessToast {...props} />,
  error: (props) => <ErrorToast {...props} />,
};

const HomeScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <Footer {...props} />}
    >
      <Tab.Screen name="DownloadView" component={DownloadView} />
      <Tab.Screen name="ClaimsView" component={ClaimsView} />
      <Tab.Screen name="NewsView" component={NewsView} />
    </Tab.Navigator>
  );
};

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
    <AuthState>
      <NewsState>
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
            <Stack.Screen name="Home" component={HomeScreens} />
          </Stack.Navigator>

          <Toast config={toastConfig} />
        </NavigationContainer>
      </NewsState>
    </AuthState>
  );
}
