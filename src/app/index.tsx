import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-3xl font-bold text-slate-900">
        Nexa-OS
      </Text>

      <Text className="mt-3 text-center text-base text-slate-600">
        Ton application est prête à être construite.
      </Text>
    </View>
  );
}
