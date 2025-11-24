import React from "react";
import { View, Text, ScrollView } from "react-native";
import theme from "../styles/theme";

export default function NotificationsScreen() {
  const dummy = [
    { id: 1, title: "Helena", msg: "Playing at Northwest Tennis Center @ 3:30pm", time: "3 min ago" },
    { id: 2, title: "Daniel", msg: "Started a poll: Where we playing?", time: "2 hrs ago" },
  ];

  return (
    <ScrollView style={{ paddingTop: 50, paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 12 }}>Notifications</Text>
      {dummy.map(n => (
        <View key={n.id} style={{ backgroundColor: theme.colors.surface, padding: 12, borderRadius: 12, marginBottom: 10 }}>
          <Text style={{ fontWeight: "700" }}>{n.title}</Text>
          <Text style={{ color: theme.colors.muted }}>{n.msg}</Text>
          <Text style={{ color: theme.colors.muted, marginTop: 6 }}>{n.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
