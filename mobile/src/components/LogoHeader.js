import React from 'react';
import { View, Image, StyleSheet, Platform } from 'react-native';

// Use the logo copied into the mobile assets folder so Metro can bundle it.
const logoSource = require('../../assets/images/courtconnect-logo.png');

export default function LogoHeader() {
  return (
    <View style={styles.container}>
      <Image source={logoSource} style={styles.logo} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // Keep small top padding
    paddingTop: Platform.OS === 'ios' ? 16 : 4,
    // Reduce bottom padding so logo sits closer to the header below
    paddingBottom: 0,
  },
  logo: {
    // smaller logo height so it sits right above the top header
    height: 244,
    width: 360,
    paddingBottom: 10,
  },
});
