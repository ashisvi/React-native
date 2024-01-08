import {
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from "react-native";

import FlatCards from "./components/FlatCards";
import ElevetedCards from "./components/ElevatedCards";
import FancyCard from "./components/FancyCard";

export default function App() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ backgroundColor: "#111" }}>
          <StatusBar style="auto" />
          <FlatCards />
          <ElevetedCards />
          <FancyCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
