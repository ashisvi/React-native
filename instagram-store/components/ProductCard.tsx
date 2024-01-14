import { Image, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg",
        }}
        style={styles.cardImage}
      />
      <View style={styles.desc}>
        <View>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.name}>{product.name}</Text>
        </View>
        <Ionicons name="bookmark-outline" size={24} color="#8C8C92" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    padding: 10,
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  cardImage: {
    height: 150,
    width: 150,
    borderRadius: 5,
  },
  desc: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
  },
  name: {
    color: "#8C8C92",
    fontWeight: "700",
  },
});
