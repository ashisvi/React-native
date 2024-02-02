import { Tabs } from "expo-router";
import { View, Text } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="users/[id]"
        options={{
          headerTitle: "User Page",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
