import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 30, justifyContent: "center" }}>
      <Text style={{ fontSize: 32, fontWeight: "600", marginBottom: 20 }}>
        Create an account
      </Text>

      <Text style={{ color: "#555", marginBottom: 20 }}>
        Enter your email to sign up for this app
      </Text>

      <TextInput
        placeholder="email@domain.com"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          padding: 15,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 15,
          borderRadius: 10,
          marginBottom: 20,
        }}
        onPress={() => navigation.navigate("Map")}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Continue</Text>
      </TouchableOpacity>

      <Text style={{ textAlign: "center", color: "#555" }}>or</Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#eee",
          padding: 15,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text style={{ textAlign: "center" }}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#eee",
          padding: 15,
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <Text style={{ textAlign: "center" }}>Continue with Apple</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 30, color: "#444", textAlign: "center" }}>
        By clicking continue, you agree to our Terms of Service and Privacy
        Policy.
      </Text>
    </View>
  );
}
