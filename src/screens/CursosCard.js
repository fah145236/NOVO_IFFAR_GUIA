import { View, StyleSheet } from "react-native";
import { Card, Title, Text} from "react-native-paper";

export default function CursosCard({nome, nivel, modalidade, duracao, turno, onPress}){


    return(
        <Card style={styles.card} onPress={onPress}>
            <Card.Content>

                <View style={styles.header}>
                    <Title style={styles.titulo}>{nivel}</Title>
                </View>
                
                <Text>Nome: {nome}</Text>
                <Text>Duração: {duracao}</Text>
                <Text>Turno: {turno}</Text>
                <Text>Modalidade: {modalidade}</Text>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card:{
        marginBottom: 15,
        borderWidth: 1,
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    titulo:{
        color: 'green',
        fontWeight: 'bold'
    }

})