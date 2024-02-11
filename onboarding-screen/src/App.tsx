import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import data from "./data/data";
import RenderItem from "./components/RenderItem";
import Button from "./components/Button";
import { useState } from "react";

export default function App() {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const x = useSharedValue(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const translateXStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }],
    };
  });

  useAnimatedReaction(
    () => {
      return Math.floor(Math.abs(x.value / SCREEN_WIDTH));
    },
    (currentValue, previousValue) => {
      if (currentValue !== previousValue) {
        runOnJS(setCurrentIndex)(currentValue);
      }
    }
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.listContainer,
            {
              width: data.length * SCREEN_WIDTH,
            },
            translateXStyle,
          ]}
        >
          {data.map((item, index) => {
            return <RenderItem item={item} index={index} key={index} />;
          })}
        </Animated.View>
      </View>
      <Button
        data={data}
        screenWidth={SCREEN_WIDTH}
        x={x}
        currentIndex={currentIndex}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
  },
});
