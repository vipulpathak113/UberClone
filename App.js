import { StyleSheet, StatusBar,KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import Mapscreen from "./screens/Mapscreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content"/>
        <NavigationContainer>
          <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS=="ios"?"padding":"height"}>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Mapscreen"
              component={Mapscreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
          </KeyboardAvoidingView>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
