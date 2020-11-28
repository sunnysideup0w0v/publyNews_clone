import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const MyPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MyPage.js</Text>
    </SafeAreaView>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
