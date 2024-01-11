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
import ActionCard from "./components/ActionCard";

export default function App() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={{ backgroundColor: "#111" }}>
          <FlatCards />
          <ElevetedCards />
          <FancyCard />
          <ActionCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
