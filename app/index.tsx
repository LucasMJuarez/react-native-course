import { router } from "expo-router";
import { Button, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Ir al Formulario" onPress={() => {router.push('/myform')}} />
                    <View style={{height:20}} />
        
      <Button title="Ir al Contador" onPress={() => {router.push('/mycount')}} />
    </View>
  );
}
