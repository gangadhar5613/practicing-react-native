import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";

function Header() {
  return (
    <View>
      <Text
        style={tailwind(
          "text-xl text-center p-2 bg-red-500 text-white mt-10 items-center"
        )}
      >
        Welcome to React Native Gangadhar!
      </Text>
      <Image
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
        style={tailwind("w-32 h-32")}
      ></Image>
    </View>
  );
}

export default Header;