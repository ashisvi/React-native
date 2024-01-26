import TrackPlayer from "react-native-track-player";
import registerRootComponent from "expo/build/launch/registerRootComponent";

import { playbackService } from "./musicPlayerServices";

import App from "./src/App";

registerRootComponent(App);
TrackPlayer.registerPlaybackService(() => playbackService);
