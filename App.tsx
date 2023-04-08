import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

import Initialize from "./src/App";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Initialize />
      <StatusBar style="auto" />
    </View>
  );
}
