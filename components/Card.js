import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Card = ({ content }) => {
  return (
    <View style={styles.container}>
      <Text>{content}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 300,
    backgroundColor: "tomato",
    marginRight: 10,
  },
});
