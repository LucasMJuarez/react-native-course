import Form from '@/components/Form';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native'; // Added Text import

const FormScreen = () => {
const router = useRouter()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Formulario</Text>
            <Form isDni={true} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
    }, 
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    }
    
})
    

export default FormScreen
