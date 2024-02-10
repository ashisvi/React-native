import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import data from "./data/data";
import RenderItem from "./components/RenderItem";
import Button from "./components/Button";

export default function App() {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const x = useSharedValue(0);

  const translateXStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }],
    };
  });

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
      <Button data={data} screenWidth={SCREEN_WIDTH} />
      component
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
