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
import ContactList from "./components/ContactList";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View style={{ backgroundColor: "#111" }}>
          <FlatCards />
          <ElevetedCards />
          <FancyCard />
          <ContactList />
          <ActionCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
