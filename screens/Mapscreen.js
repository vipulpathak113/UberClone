import { StyleSheet, Text, View } from "react-native";
import Maps from "../components/Maps";
import tw from "twrnc";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const Stack = createNativeStackNavigator();

const Mapscreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Maps />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default Mapscreen;

const styles = StyleSheet.create({});
