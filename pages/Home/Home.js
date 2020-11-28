import React from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import Card from "../../components/Card";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home.js</Text>
      <FlatList
        horizontal
        data={[
          { id: 1, content: "hello" },
          { id: 2, content: "world" },
          { id: 3, content: "react native" },
          { id: 4, content: "flatlist" },
          { id: 5, content: "practice" },
        ]}
        renderItem={({ item }) => {
          return <Card content={item.content} />;
        }}
        keyExtractor={(item) => String(item.id)}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topContent: {
    flexDirection: "row",
  },
});
