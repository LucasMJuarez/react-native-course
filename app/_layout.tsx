import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#44441e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name='index' options={{headerTitle: 'Home'}} />
      <Stack.Screen name='myform' options={{headerTitle: 'Formulario'}} />
      <Stack.Screen name='mycount' options={{headerTitle: 'Contador'}} />
      <Stack.Screen name='todoList' options={{headerTitle: 'Lista de Tareas'}} />
    </Stack>  
  );
}
