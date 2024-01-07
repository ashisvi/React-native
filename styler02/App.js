import { View, StatusBar, SafeAreaView, ScrollView } from "react-native";

import FlatCards from "./components/FlatCards";
import ElevetedCards from "./components/ElevatedCards";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <StatusBar style="auto" />
          <FlatCards />
          <ElevetedCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
