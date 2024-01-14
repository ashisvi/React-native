import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Header() {
  return (
    <View>
      <View style={styles.navbar}>
        {/* <FontAwesome name="arrow-left" color="#999DAC" size={16} /> */}
        <Text style={styles.dimText}>Rose.BlackPink</Text>
        {/* <FontAwesome name="arrow-right" color="#999DAC" size={16} /> */}
      </View>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.whiteText}>1.5M</Text>
          <Text style={styles.dimText}>Followers</Text>
        </View>
        <View>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            style={styles.profileImage}
          />
        </View>
        <View>
          <Text style={styles.whiteText}>13</Text>
          <Text style={styles.dimText}>Following</Text>
        </View>
      </View>
      <View>
        <Text style={[styles.userName, styles.whiteText]}>Rose BlackPink</Text>
        <Text style={[styles.userDesc, styles.dimText]}>
          Women and girls clothing store. The best quality and variety of goods
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.primaryBtn, styles.btn]}>
          <Text style={styles.btnText}>FOLLOW</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.secondaryBtn, styles.btn]}>
          <Text style={styles.btnText}>MESSAGE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  profileContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginBottom: 15,
  },
  whiteText: {
    color: "rgb(240,240,240)",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },
  dimText: {
    color: "rgba(255, 255, 255, 0.7)",
    textAlign: "center",
  },
  profileImage: {
    height: 100,
    width: 100,
    borderWidth: 1.5,
    borderColor: "#FF6767",
    borderRadius: 15,
  },
  userName: {
    textAlign: "center",
    fontWeight: "900",
    marginVertical: 7,
  },
  userDesc: {
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 5,
  },
  btn: {
    borderRadius: 10,
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryBtn: {
    backgroundColor: "#FF6767",
  },
  secondaryBtn: {
    borderColor: "#fff",
    borderWidth: 1,
  },
  btnText: {
    fontWeight: "500",
    color: "#fff",
    fontSize: 15,
  },
});
