import { View } from "react-native";

export default function Card({ children }) {
  return (
    <View
      style={{
        borderRadius: 10,
        backgroundColor: "#2222",
        flex: 1,
        padding: 10,
      }}
    >
      {children}
    </View>
  );
}
