import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in JavaScript 21 - ES12</Text>
        </View>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/161296/church-organ-ceiling-catholicism-161296.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in prduction
            rollout. I won't be wasting much more time and directly jump to code
            with easy to understand examples
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite("https://www.google.com")}
          >
            <Text style={styles.SocialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite("https://www.google.com")}
          >
            <Text style={styles.SocialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  card: {
    width: 330,
    height: 360,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: "#E07C24",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600'
  },
  cardImage: {
    height: 100,
  },
  bodyContainer: {
    padding: 10,

  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  SocialLinks: {
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6
  },
});
