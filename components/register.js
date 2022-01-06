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

const Register = () => {
  const [text, setText] = useState("");
  const foo = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.mDiv}>
        <Text style={styles.title}>דואט</Text>
        <TextInput
          label="שם מלא"
          value={text}
          onChangeText={(text) => setText(text)}
          mode="outlined"
          style={styles.txtInput}
        />
        <View style={styles.middelDiv}>
          <TextInput
            label="מין"
            value={text}
            onChangeText={(text) => setText(text)}
            mode="outlined"
            style={styles.middeTxtInput1}
          />
          <TextInput
            label="גיל"
            value={text}
            onChangeText={(text) => setText(text)}
            mode="outlined"
            style={styles.middeTxtInput2}
          />
        </View>
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
        <TextInput
          label=" אימות סיסמא"
          value={text}
          onChangeText={(text) => setText(text)}
          mode="outlined"
          style={styles.txtInput}
        />

        <TouchableOpacity style={styles.btn} onPress={() => {}} title="הרשם">
          <Text style={styles.btnText}>הרשם</Text>
        </TouchableOpacity>
        <Text style={styles.txt1}>כבר רשום? לחץ כאן</Text>
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
    height: 590,
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
  middelDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 280,
    //marginRight: 15,
  },
  middeTxtInput1: {
    width: 120,
    height: 50,
    alignSelf: "center",
    marginTop: 20,
    marginLeft: 25,
    marginRight: 20,
  },
  middeTxtInput2: {
    width: 120,
    height: 50,
    alignSelf: "center",
    marginTop: 20,
    marginLeft: 5,
    marginRight: 20,
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

export default Register;
