import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import theme from "../styles/theme";
import { courts } from "../data/courts";

export default function MapScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={{
        paddingTop: 50, paddingHorizontal: 20, paddingBottom: 12,
        flexDirection: "row", justifyContent: "space-between", alignItems: "center"
      }}>
        <Text style={{ fontSize: 24, fontWeight: "700" }}>San Antonio</Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Groups")}>
            <Text style={{ color: theme.colors.muted }}>Groups</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
            <Text style={{ color: theme.colors.muted, marginLeft: 12 }}>Notifications</Text>
          </TouchableOpacity>
        </View>
      </View>

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 29.505,
          longitude: -98.576,
          latitudeDelta: 0.06,
          longitudeDelta: 0.06,
        }}
      >
        {courts.map((court) => (
          <Marker
            key={court.id}
            coordinate={{ latitude: court.lat, longitude: court.lng }}
            title={court.name}
            description={`${court.scheduled.length} Group Members Scheduled`}
          >
            {/* Custom marker: a circle with count */}
            <View style={{
              backgroundColor: theme.colors.primary,
              padding: 8,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: "white",
              minWidth: 40,
              alignItems: "center"
            }}>
              <Text style={{ color: "white", fontWeight: "700" }}>
                {court.scheduled.length}
              </Text>
            </View>

            <Callout onPress={() => navigation.navigate("Groups", { courtId: court.id })}>
              <View style={{ width: 220 }}>
                <Text style={{ fontWeight: "700", marginBottom: 4 }}>{court.name}</Text>
                <Text style={{ color: theme.colors.muted }}>{court.address}</Text>
                <Text style={{ marginTop: 6, color: theme.colors.muted }}>
                  {court.scheduled.length === 0 ? "No Group Members Scheduled" : `${court.scheduled.length} Group Members Scheduled`}
                </Text>
                <Text style={{ marginTop: 8, color: theme.colors.primary }}>Tap to view groups</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}
