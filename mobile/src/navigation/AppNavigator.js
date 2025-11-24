import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourtListScreen from "../screens/CourtListScreen";
import MapScreen from "../screens/MapScreen";
import GroupsScreen from "../screens/GroupsScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import LogoHeader from "../components/LogoHeader";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          headerTitle: () => <LogoHeader />,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: 'white' },
          tabBarStyle: { height: 100, paddingBottom: 18, paddingTop: 8 },
          tabBarIcon: ({ color, size }) => {
            let iconName = "ellipse";
            if (route.name === "Map") iconName = "map-outline";
            else if (route.name === "Groups") iconName = "people-outline";
            else if (route.name === "Notifications") iconName = "notifications-outline";
            else if (route.name === "Profile") iconName = "person-circle-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#0B7A3A", // green accent
          tabBarInactiveTintColor: "#7a7a7a",
        })}
      >
        <Tab.Screen name="List" component={CourtListScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Groups" component={GroupsScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
