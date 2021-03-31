import React from "react";
import styles from "./styles";
import { StyleSheet, Text, View, Pressable } from "react-native";

const Buttons = (props) => {
  const { type, onPress } = props;
  const backgroundColor = type === "primary" ? "#171a20cc" : "#ffffffa6";
  const color = type === "primary" ? "white" : "#171a20";
  const text = type === "primary" ? "Custom Order" : "Existing Inventory";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: color }]}>{text}</Text>
      </Pressable>
    </View>
  );
};
export default Buttons;
