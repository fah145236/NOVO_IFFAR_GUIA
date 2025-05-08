import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { Tema } from './src/config/Tema';
import Home from './src/screens/Home';
import Cursos from './src/screens/Cursos';
import Eventos from './src/screens/Eventos';
import Sobre from './src/screens/Sobre';
import DetalheCurso from './src/screens/DetalheCurso';
import DetalheEventos from './src/screens/DetalheEvento';
import Login from './src/screens/Login';
import Loading from './src/screens/Loading';
import Cadastro from './src/screens/Cadastro';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UsuarioProvider } from './src/contexto/UsuarioContexto';
import NovoEvento from './src/screens/NovoEvento';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Tema.colors.primary,
          headerShown: false
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' size={size} color={color} />
          )
        }} />
        <Tab.Screen name="Cursos" component={Cursos} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='book' size={size} color={color} />
          )
        }} />
        <Tab.Screen name="Eventos" component={Eventos} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='calendar' size={size} color={color} />
          )
        }} />
        <Tab.Screen name="Sobre" component={Sobre} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='information' size={size} color={color} />
          )
        }} />
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider theme={Tema}>
      <UsuarioProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="DetalheCurso" component={DetalheCurso} />
            <Stack.Screen name="DetalheEventos" component={DetalheEventos} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="NovoEvento" component={NovoEvento} />
          </Stack.Navigator>
        </NavigationContainer>
      </UsuarioProvider>
    </PaperProvider>
  );
}



