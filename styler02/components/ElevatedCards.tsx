import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const ElevetedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={styles.card}>
          <Text>Card</Text>
        </View>
        <View style={styles.card}>
          <Text>Card</Text>
        </View>
        <View style={styles.card}>
          <Text>Card</Text>
        </View>
        <View style={styles.card}>
          <Text>Card</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevetedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: "900",
    margin: 8,
    color: "#fff",
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    backgroundColor: "cyan",
    color: "#CAD5E2",
    borderRadius: 4,
    margin: 8,
  },
});
