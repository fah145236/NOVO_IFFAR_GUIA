import { View, Text, StyleSheet } from "react-native";
import { Card, Title, Badge } from "react-native-paper";

export default function EventosCard({titulo, data, local, inscricao, onPress}){

    const corBadge = inscricao === 'Aberta' ? '#1C9B5E' : '#C4112F';

    return(
        <Card style={styles.card} onPress={onPress}>
            <Card.Content>

                <View style={styles.header}>
                    <Title>{titulo}</Title>
                    <Badge style={[styles.badge, { backgroundColor: corBadge }]}>
                        {inscricao}
                    </Badge>
                </View>
                
                <Text>Data: {data}</Text>
                <Text>Local: {local}</Text>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card:{
        marginBottom: 15,
        borderWidth: 0.1,
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    badge: {
        color: 'white',
        paddingHorizontal: 20,
        borderRadius: 8,
        fontSize: 12,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      },
})