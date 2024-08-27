import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";

import NoCameraDeviceError from "./components/NoCameraDeviceError";
import PermissionsPage from "./components/PermissionsPage";
import useIsAppInFocus from "./hooks/useIsAppInFocus";

const CameraScreen = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice("back");

  const isFocused = useIsAppInFocus();

  if (!hasPermission)
    return <PermissionsPage requestPermission={requestPermission} />;

  if (!device) return <NoCameraDeviceError />;

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isFocused}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default CameraScreen;
