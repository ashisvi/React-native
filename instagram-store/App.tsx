import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";

import Header from "./components/Header";
import Products from "./components/Products";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#2A3037" />
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <Products />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A3037",
  },
});
