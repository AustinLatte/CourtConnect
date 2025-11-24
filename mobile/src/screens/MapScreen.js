import React, { useRef, useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Alert } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import theme from "../styles/theme";
import { courts } from "../data/courts";
import TopHeader from "../components/TopHeader";

export default function MapScreen({ navigation, route }) {
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: 29.505,
    longitude: -98.576,
    latitudeDelta: 0.06,
    longitudeDelta: 0.06,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const city = route?.params?.city;
    if (city) {
      // Geocode using Nominatim
      (async () => {
        try {
          setLoading(true);
          const q = encodeURIComponent(city + ', USA');
          const url = `https://nominatim.openstreetmap.org/search?q=${q}&format=json&limit=1`;
          const res = await fetch(url, { headers: { 'User-Agent': 'CourtConnectApp/1.0' } });
          const data = await res.json();
          if (data && data.length > 0) {
            const loc = data[0];
            const newRegion = {
              latitude: parseFloat(loc.lat),
              longitude: parseFloat(loc.lon),
              latitudeDelta: 0.06,
              longitudeDelta: 0.06,
            };
            setRegion(newRegion);
            // animate map
            if (mapRef.current && mapRef.current.animateToRegion) {
              mapRef.current.animateToRegion(newRegion, 500);
            }
          } else {
            Alert.alert('Location not found', `Could not find coordinates for "${city}"`);
          }
        } catch (e) {
          console.warn('Geocode error', e);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [route?.params?.city]);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <TopHeader navigation={navigation} />

      {loading && (
        <ActivityIndicator
          style={{ position: 'absolute', top: 120, left: 0, right: 0, zIndex: 30 }}
          size="large"
          color={theme.colors.primary}
        />
      )}

      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        initialRegion={region}
        onMapReady={() => {
          // ensure region applied on mount
          if (mapRef.current && mapRef.current.animateToRegion) {
            mapRef.current.animateToRegion(region, 0);
          }
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
              borderColor: 'white',
              minWidth: 40,
              alignItems: 'center'
            }}>
              <Text style={{ color: 'white', fontWeight: '700' }}>
                {court.scheduled.length}
              </Text>
            </View>

            <Callout onPress={() => navigation.navigate('Groups', { courtId: court.id })}>
              <View style={{ width: 220 }}>
                <Text style={{ fontWeight: '700', marginBottom: 4 }}>{court.name}</Text>
                <Text style={{ color: theme.colors.muted }}>{court.address}</Text>
                <Text style={{ marginTop: 6, color: theme.colors.muted }}>
                  {court.scheduled.length === 0 ? 'No Group Members Scheduled' : `${court.scheduled.length} Group Members Scheduled`}
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
