import { View, Text, ScrollView } from "react-native";

export default function CourtListScreen({ navigation }) {
  const courts = [
    { name: "Northwest Tennis Center", members: 4 },
    { name: "American Tennis Center", members: 2 },
    { name: "Lost Woods Center", members: 0 },
  ];

  return (
    <ScrollView style={{ padding: 20, paddingTop: 60 }}>
      {courts.map((c, i) => (
        <View
          key={i}
          style={{
            padding: 20,
            borderRadius: 15,
            backgroundColor: "#f8f8f8",
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600" }}>{c.name}</Text>
          <Text style={{ color: "#666", marginTop: 4 }}>
            {c.members === 0
              ? "No group members scheduled"
              : `${c.members} Group Members Scheduled`}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
