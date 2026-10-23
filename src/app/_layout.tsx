
import "./global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

StyleSheet.setFlag("darkMode", "class");

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />

      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
