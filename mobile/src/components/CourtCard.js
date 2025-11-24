import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import theme from "../styles/theme";

export default function CourtCard({ court, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{
      backgroundColor: theme.colors.surface,
      padding: 16,
      borderRadius: 12,
      marginBottom: 12
    }}>
      <Text style={{ fontWeight: "700", fontSize: 16 }}>{court.name}</Text>
      <Text style={{ color: theme.colors.muted, marginTop: 6 }}>{court.scheduled.length === 0 ? "No Group Members Scheduled" : `${court.scheduled.length} Group Members Scheduled`}</Text>
    </TouchableOpacity>
  );
}
