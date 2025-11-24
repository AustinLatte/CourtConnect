import theme from "../styles/theme";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform } from "react-native";
import TopHeader from "../components/TopHeader";

export default function CourtListScreen({ navigation }) {
  const courts = [
    { name: "Northwest Tennis Center", members: 4 },
    { name: "American Tennis Center", members: 2 },
    { name: "Lost Woods Center", members: 0 },
  ];

  const HEADER_HEIGHT = 88;

  return (
    <View style={styles.container}>
      <TopHeader navigation={navigation} />

      <ScrollView contentContainerStyle={[styles.listContainer, { paddingTop: HEADER_HEIGHT + 12 }] }>
        {courts.map((c, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.cardTitle}>{c.name}</Text>
            <Text style={styles.cardSubtitle}>
              {c.members === 0 ? "No group members scheduled" : `${c.members} Group Members Scheduled`}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 88,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingHorizontal: 20,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  city: { fontSize: 24, fontWeight: '700' },
  controls: { flexDirection: 'row' },
  controlText: { color: theme.colors.muted },
  listContainer: { paddingHorizontal: 20, paddingBottom: 40 },
  card: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#f8f8f8',
    marginBottom: 15,
  },
  cardTitle: { fontSize: 18, fontWeight: '600' },
  cardSubtitle: { color: '#666', marginTop: 4 },
});
