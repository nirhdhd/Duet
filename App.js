import { StatusBar } from "expo-status-bar";
import { I18nManager, StyleSheet, Text, View } from "react-native";
import Login from "./components/login";
import Register from "./components/register";
import BottomNavbar from "./components/bottom navbar/bottomNavbar";

//Navigator
//import Navigator from "./navigation/navigator";

import {
  useFonts,
  Rubik_300Light,
  Rubik_500Medium,
  Rubik_700Bold,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_500Medium,
    Rubik_700Bold,
    Rubik_600SemiBold,
  });

  return (
    <View style={styles.container}>
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <BottomNavbar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F3F7",
    direction: "rtl",
  },
});
