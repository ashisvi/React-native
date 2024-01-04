import { View, Text, StyleSheet } from "react-native";

function App() {
  return (
    <View style={style.container}>
      <Text style={style.heading}>Hello World!</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default App;
