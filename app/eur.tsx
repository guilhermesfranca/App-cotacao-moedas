import { StyleSheet, View, Text, Image } from "react-native";
import { Button } from "../components/button";
import { useEffect, useState } from "react";
import { getEUR } from "../services/awesomeapi";

export default function Screen() {
    const [loading, setLoading] = useState(true);
    const [currentValue, setCurrentValue] = useState<number>(0);


    const updateCurrency = async () => {
        setLoading(true);
        const euro = await getEUR();
        setLoading(false);
        setCurrentValue(euro);

    }

    useEffect(() => {
        updateCurrency();
    }, [])
    return (
        <View style={styles.container}> 
            <Image
            source={require('../assets/euro.png')}
            resizeMode="contain"
            style={styles.logo}
            />

            {loading && 
                <Text style={styles.h2}> Atualizando...</Text>
            }

            {!loading &&
            <>
            <Text style={styles.h2}>O Euro está:</Text>
            <Text style={styles.currencyText}>R$ {currentValue.toFixed(2)}</Text>
            <Button 
            label='Atualizar cotação'
            onPress={updateCurrency}
            />
            </>
}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b1c2d',
        paddingHorizontal: 20,
    },
    logo: {
        height: 170,
        width:200,
    
    },
    h2: {
        color: "#CCCCCC",
        fontSize: 24,
        marginTop: 30,
    },
    currencyText: {
        color: 'white',
        fontSize: 52,
        marginTop: 20,
        marginBottom: 50,
        textAlign:'center'
    }
});