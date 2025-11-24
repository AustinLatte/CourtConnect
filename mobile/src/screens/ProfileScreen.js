import React from "react";
import { View, Text } from "react-native";
import theme from "../styles/theme";

export default function ProfileScreen({ route }) {
  const courtId = route?.params?.courtId;
  return (
    <View style={{ flex: 1, paddingTop: 60, paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>Profile</Text>
      <Text style={{ color: theme.colors.muted, marginTop: 8 }}>User details / settings will go here.</Text>
      {courtId && <Text style={{ marginTop: 12 }}>Launched from court {courtId}</Text>}
    </View>
  );
}
