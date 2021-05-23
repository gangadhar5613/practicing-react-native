import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import tailwind from "tailwind-rn";
import Header from "./components/Header";

export default function App() {
  return (
    <View>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    backgroundColor: "black",
  },
});
