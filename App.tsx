
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import LoginScreen from './src/screens/LoginScreen';
import Principal from './src/screens/Principal';

//Types StackParamList
export type RootStackParamList = {
  Login: undefined;
  Principal: {
    nome: string;
    matricula: string;
  };
};


const Stack = createNativeStackNavigator<RootStackParamList>();

function StackPL() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Principal" component={Principal}/>
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <StackPL/>
    </NavigationContainer>
  );
}