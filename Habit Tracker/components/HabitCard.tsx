import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome6";

import Card from "./Card";

export default function HabitCard({}) {
  return (
    <Card>
      <View>
        <Text
          style={{
            marginVertical: 5,
            marginLeft: 10,
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          Read book
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            gap: 8,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginVertical: 10
          }}
        >
          {/* Fixme: Temprary code blow */}
          <FontAwesome
            solid={true}
            name="circle-check"
            size={28}
            color="green"
          />
          <FontAwesome
            solid={true}
            name="circle-check"
            size={28}
            color="green"
          />
          <FontAwesome
            solid={true}
            name="circle-check"
            size={28}
            color="green"
          />
          <FontAwesome
            solid={true}
            name="circle-check"
            size={28}
            color="green"
          />
          <FontAwesome
            solid={true}
            name="circle-xmark"
            size={28}
            color="red"
          />
          <FontAwesome
            solid={true}
            name="circle-check"
            size={28}
            color="green"
          />
          <FontAwesome
            solid={true}
            name="circle-xmark"
            size={28}
            color="red"
          />
          {/* Temprary code above */}
        </View>
      </View>
    </Card>
  );
}
