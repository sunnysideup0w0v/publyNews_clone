import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const Curator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Curator.js</Text>
    </SafeAreaView>
  );
};

export default Curator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
