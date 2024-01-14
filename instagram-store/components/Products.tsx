import { StyleSheet, Text, View, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { productsList } from "../assets/constants";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.tabBarContainer}>
        <View style={styles.tabBarItem}>
          <Ionicons name="grid-outline" size={24} color="#908E8B" />
          <Text style={styles.text}>Posts</Text>
        </View>
        <View style={[styles.tabBarItem, styles.activeBarItem]}>
          <Ionicons name="cart-outline" size={24} color="#FF6767" />
          <Text style={[styles.text, styles.ativeText]}>Products</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.products}>
          {productsList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f9f9",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 500,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  tabBarContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 10,
  },
  tabBarItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
    borderBottomColor: "#E2DFE5",
    borderBottomWidth: 3,
    paddingBottom: 12,
  },
  text: {
    fontSize: 16,
    color: "#908E8B",
    fontWeight: "600",
  },
  activeBarItem: {
    borderColor: "#FF6767",
  },
  ativeText: {
    color: "#FF6767",
  },
  products: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    gap: 10,
    paddingVertical: 15,
  },
});
