import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "../screens/MapScreen";
import GroupsScreen from "../screens/GroupsScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { height: 64, paddingBottom: 8, paddingTop: 8 },
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
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Groups" component={GroupsScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
