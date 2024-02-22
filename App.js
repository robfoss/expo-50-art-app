import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Provider} from 'react-redux';
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import store from "./redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
          title: '',
          headerTransparent: true,
        }} 
      />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}