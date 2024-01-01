import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Habits',
        }}
      />
      <Stack.Screen name="AddHabit" />
    </Stack>
  );
}
