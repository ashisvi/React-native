import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat cards</Text>
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.card, styles.red]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.card, styles.green]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.card, styles.blue]}>
            <Text>Blue</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  headingText: {
    fontSize: 20,
    fontWeight: "900",
    margin: 8,
  },
  card: {
    height: 100,
    width: 100,
    margin: 8,
    borderRadius: 4,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  red: {
    backgroundColor: "red",
  },
  green: {
    backgroundColor: "green",
  },
  blue: {
    backgroundColor: "blue",
  },
});
