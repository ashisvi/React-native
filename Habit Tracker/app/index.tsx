import { View, Text, ScrollView } from "react-native";
import { format } from "date-fns";

import { Card, HabitCard } from "@/components";

export default function Home() {
  const today = format(Date.now(), "EEEE, MMMM d");

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "#ffffff",
      }}
    >
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: 5,
          marginVertical: 10,
        }}
      >
        <Card>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Good morning, Ashish
          </Text>
        </Card>
        <Card>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "700",
              }}
            >
              1/4
            </Text>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 15,
              }}
            >
              Habits done!
            </Text>
          </View>
        </Card>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingHorizontal: 7,
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "700",
          }}
        >
          My Habits
        </Text>
        <Text>{today}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            display: "flex",
            gap: 10,
            marginVertical: 10,
          }}
        >
          {/* Fixme: Temprary code blow */}
          <HabitCard />
          <HabitCard />
          <HabitCard />
          <HabitCard />
          <HabitCard />
          <HabitCard />
          <HabitCard />
          {/* Temprary code above */}
        </View>
      </ScrollView>
    </View>
  );
}
