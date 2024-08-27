import { Button, StyleSheet, Text, View } from "react-native";

const NoCameraDeviceError = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        We couldn't find a camera device on your device
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
});

export default NoCameraDeviceError;
