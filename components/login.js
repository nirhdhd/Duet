import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewBase,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";

const Login = () => {
  const [text, setText] = useState("");
  const foo = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.mDiv}>
        <Text style={styles.title}>דואט</Text>
        <TextInput
          label="מייל"
          value={text}
          onChangeText={(text) => setText(text)}
          mode="outlined"
          style={styles.txtInput}
        />
        <TextInput
          label="סיסמא"
          value={text}
          onChangeText={(text) => setText(text)}
          mode="outlined"
          style={styles.txtInput}
        />
        <TouchableOpacity style={styles.btn} onPress={() => {}} title="התחבר">
          <Text style={styles.btnText}>התחבר</Text>
        </TouchableOpacity>
        <Text style={styles.txt1}>עדיין לא נרשמת? לחץ כאן</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#F3F3F7",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  title: {
    alignSelf: "center",
    fontFamily: "Rubik_700Bold",
    fontSize: 48,
    color: "#645BF9",
  },
  mDiv: {
    display: "flex",
    width: 314,
    height: 384,
    borderRadius: 45,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    textAlign: "center",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 217,
    height: 51,
    backgroundColor: "#645BF9",
    borderRadius: 14,
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 10,
    shadowColor: "#645BF9",
    elevation: 10,
  },
  btnText: {
    color: "#ffff",
    textDecorationColor: "#fff",
    alignSelf: "center",
    fontSize: 18,
  },
  txt1: {
    color: "#645BF9",
    alignSelf: "center",
  },
  txtInput: {
    width: "85%",
    height: 50,
    alignSelf: "center",
    marginTop: 20,
  },
});

export default Login;
