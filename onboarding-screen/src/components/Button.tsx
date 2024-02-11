import { StyleSheet, View, Pressable } from "react-native";
import Animated, {
  Extrapolation,
  SharedValue,
  clamp,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Svg, Path } from "react-native-svg";

import { OnboardingData } from "../data/data";
import { Arrow } from "../assets/icon/Arrow.svg";

type Props = {
  data: OnboardingData[];
  screenWidth: number;
  x: SharedValue<number>;
  currentIndex: number;
};

const RADIUS = 100;

const Button = ({ data, screenWidth, x, currentIndex }: Props) => {
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const animatedOpacityButton = useAnimatedStyle(() => {
    const opacity = interpolate(
      Math.abs(x.value % screenWidth),
      [0, 40],
      [1, 0],
      Extrapolation.CLAMP
    );
    return { opacity };
  });

  return (
    <View>
      <AnimatedPressable
        style={styles.button}
        onPress={() => {
          if (Math.abs(x.value) % screenWidth === 0) {
            const clampValue = clamp(
              Math.abs(x.value) + screenWidth,
              0,
              2 * screenWidth
            );
            x.value = withTiming(-clampValue, { duration: 1000 });
          }
        }}
      >
        <Svg width={40} height={40}>
          <Path
            d={Arrow}
            stroke={data[currentIndex].backgroundColor}
            fill="none"
          />
        </Svg>
      </AnimatedPressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    backgroundColor: "lightblue",
    width: RADIUS,
    height: RADIUS,
    bottom: 100,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RADIUS,
  },
});
