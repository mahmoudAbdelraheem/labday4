import Splash from "./src/Screens/Splash/Splash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieDetails from "./src/Screens/MovieDetails/MovieDetails";
import Layout from "./src/Layout/Layout";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Main" component={Layout} />
        <Stack.Screen name="Details" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
