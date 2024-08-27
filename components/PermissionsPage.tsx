import { Button, StyleSheet, Text, View } from "react-native";

interface PermissionsPageProps {
  requestPermission: () => void;
}

const PermissionsPage = ({ requestPermission }: PermissionsPageProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        We need your permission to show the camera
      </Text>
      <Button onPress={requestPermission} title="grant permission" />
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

export default PermissionsPage;
