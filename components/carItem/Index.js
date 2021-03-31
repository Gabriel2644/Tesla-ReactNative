import React from "react";
import styles from "./styles";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Buttons from "../Buttons";

const CarItem = (props) => {
  const { name, tagLine, tagLineCTA, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine}
          <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Buttons
          type="primary"
          onPress={() => {
            console.warn("Custom Button Was Pressed");
          }}
        />
        <Buttons
          type="secondary"
          onPress={() => {
            console.warn("Existing Inventory Button Was Pressed");
          }}
        />
      </View>
    </View>
  );
};
export default CarItem;
