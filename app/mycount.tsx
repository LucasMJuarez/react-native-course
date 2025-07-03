import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";



const CountScreen = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Count: {count}</Text>
            <Button title="Increment" onPress={() => setCount(count + 1)} />
            <View style={styles.divider} />
            <Button title="Decrement" onPress={() => setCount(count - 1)} />
        </View>
    );



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    divider: {
        height: 20,
    }
});

export default CountScreen;