import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import theme from "../styles/theme";
import { courts } from "../data/courts";

export default function GroupsScreen({ navigation, route }) {
  const courtId = route?.params?.courtId;
  // If courtId provided, show that court
  const displayCourts = courtId ? courts.filter(c => c.id === courtId) : courts;

  return (
    <ScrollView style={{ paddingTop: 50, paddingHorizontal: 16 }}>
      {displayCourts.map((c) => (
        <TouchableOpacity
          key={c.id}
          style={{
            backgroundColor: theme.colors.surface,
            padding: 16,
            borderRadius: 12,
            marginBottom: 12,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            elevation: 2
          }}
          onPress={() => navigation.navigate("Profile", { courtId: c.id })}
        >
          <Text style={{ fontSize: 18, fontWeight: "700" }}>{c.name}</Text>
          <Text style={{ color: theme.colors.muted, marginTop: 6 }}>
            {c.scheduled.length === 0 ? "No Group Members Scheduled" : `${c.scheduled.length} Group Members Scheduled`}
          </Text>

          {/* small list of sessions like your mockup */}
          {c.scheduled.map((s, idx) => (
            <View key={idx} style={{ marginTop: 8 }}>
              <Text style={{ fontWeight: "600" }}>{s.user}</Text>
              <Text style={{ color: theme.colors.muted }}>{s.time}</Text>
            </View>
          ))}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
