import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, TextInput } from 'react-native';
import theme from '../styles/theme';

export default function TopHeader({ navigation }) {
  const [q, setQ] = useState('');

  function submit() {
    if (!q || q.trim().length === 0) return;
    // Navigate to Map screen and pass the city query as a param
    navigation?.navigate('Map', { city: q.trim() });
    // Optionally clear the input: setQ('');
  }

  return (
    <View style={styles.header} pointerEvents="box-none">
      <TextInput
        placeholder="San Antonio"
        value={q}
        onChangeText={setQ}
        returnKeyType="search"
        onSubmitEditing={submit}
        style={styles.searchInput}
        placeholderTextColor="#666"
      />

      <View style={styles.controls}>
        <TouchableOpacity onPress={() => navigation?.navigate('Map')}>
          <Text style={styles.controlText}>Map View</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation?.navigate('List')}>
          <Text style={[styles.controlText, { marginLeft: 12 }]}>List View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    // position the search box directly below the logo (small gap)
    top: Platform.OS === 'ios' ? 0 : 50,
    left: 0,
    right: 0,
    height: 80,
    paddingTop: 0,
    paddingHorizontal: 20,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 20,
  },
  searchInput: {
    flex: 1,
    height: 36,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e6e6e6',
  },
  controls: { flexDirection: 'row', marginLeft: 12 },
  controlText: { color: theme.colors.muted },
});
