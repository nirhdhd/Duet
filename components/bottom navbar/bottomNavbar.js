import { StatusBar } from "expo-status-bar";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState, useRef, useEffect } from "react";
import { TouchableOpacity, Image } from "react-native";

const BottomNavbar = () => {
  const [text, setText] = useState("");

  const [bg1, setBg1] = useState("#645BF9");
  const [bg2, setBg2] = useState("#645BF9");
  const [bg3, setBg3] = useState("#645BF9");
  const [bg4, setBg4] = useState("#645BF9");
  const [val, setVal] = useState(0);

  const foo = (val) => {
    switch (val) {
      case 1:
        setBg1("#645BF9");
        setBg2("#ffff");
        setBg3("#ffff");
        setBg4("#ffff");
        break;
      case 2:
        setBg1("#ffff");
        setBg2("#645BF9");
        setBg3("#ffff");
        setBg4("#ffff");
        break;
      case 3:
        setBg1("#ffff");
        setBg2("#ffff");
        setBg3("#645BF9");
        setBg4("#ffff");
        break;
      case 4:
        setBg1("#ffff");
        setBg2("#ffff");
        setBg3("#ffff");
        setBg4("#645BF9");

        break;

      default:
        break;
    }
    setVal(50);

    console.log(val);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={
          (styles.one,
          {
            backgroundColor: bg1,
            flex: 1,
            zIndex: 10,
          })
        }
        onPress={() => foo(1)}
      >
        <Image
          style={{ zIndex: 1000, width: 50, height: 50, alignSelf: "center" }}
          source={userIcon}
        />
        <Text>home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={(styles.two, { backgroundColor: bg2, flex: 1 })}
        onPress={() => foo(2)}
      ></TouchableOpacity>
      <TouchableOpacity
        style={(styles.three, { backgroundColor: bg3, flex: 1 })}
        onPress={() => foo(3)}
      ></TouchableOpacity>
      <TouchableOpacity
        style={(styles.four, { backgroundColor: bg4, flex: 1 })}
        onPress={() => foo(4)}
      ></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 50,
    backgroundColor: "#ffff",
    width: "90%",
    borderRadius: 15,
    height: 50,
    elevation: 10,
    overflow: "hidden",
  },

  one: {
    //backgroundColor: ,
    flex: 1,
    // transform: [{ translateX: translation }],
  },
  two: {
    //backgroundColor: "blue",
    flex: 1,
  },
  three: {
    //backgroundColor: "green",
    flex: 1,
  },
  four: {
    //backgroundColor: "yellow",
    flex: 1,
  },
});

export default BottomNavbar;
