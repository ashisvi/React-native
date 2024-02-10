import { StyleSheet, Text, View, Pressable } from "react-native";

import { OnboardingData } from "../data/data";
import { Arrow } from "../assets/icon/Arrow.svg";
import { SharedValue, withTiming } from "react-native-reanimated";

type Props = {
  data: OnboardingData[];
  screenWidth: number;
  x: SharedValue<number>;
};

const RADIUS = 100;

const Button = ({ data, screenWidth, x }: Props) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        x.value = withTiming(-screenWidth, { duration: 1000 });
      }}
    >
      <Arrow stroke={data[0].backgroundColor} width={40} height={40} />
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    backgroundColor: "orange",
    width: RADIUS,
    height: RADIUS,
    bottom: 100,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RADIUS,
  },
});
