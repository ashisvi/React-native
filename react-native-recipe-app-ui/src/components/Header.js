import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({ headerText, headerIcon }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 40 }}>
      <Text style={{ flex: 1, fontSize: 22, fontWeight: "700" }}>
        {headerText}
      </Text>
      <FontAwesome name={headerIcon} size={24} color="#f96163" />
    </View>
  );
};

export default Header;
