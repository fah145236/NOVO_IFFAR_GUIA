import { StyleSheet, View } from "react-native";
import { Card, Divider, Text, Button, Badge } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';

export default function DetalheEventos({ route, navigation }) {

  const {
    titulo,
    local,
    data,
    unidade,
    duracao,
    turno,
    inscricao,
    descricao
  } = route.params;

  const corBadge = inscricao === 'Aberta' ? '#1C9B5E' : '#C4112F';

  return (
    <LinearGradient colors={['#dff5eb', '#ffffff']} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Card mode='outline' style={styles.card}>
          <Card.Content style={styles.info}>

            <View style={styles.header}>
              <Text variant="titleLarge">
                {titulo}
              </Text>
              <Badge style={[styles.badge, { backgroundColor: corBadge }]}>
                {inscricao}
              </Badge>
            </View>

            <Divider style={styles.divisor} />

            <Text>Local: {local}</Text>
            <Text>data: {data}</Text>
            <Text>Duração: {duracao}</Text>
            <Text>Turno: {turno}</Text>

            <Divider style={styles.divisor} />

            <Text variant="titleSmall">Descrição</Text>
            <Text variant="bodyMedium">{descricao}</Text>

          </Card.Content>
        </Card>
        <Button mode="contained" onPress={() => navigation.navigate('Tabs', {screen:'Eventos'})} style={styles.botaoVoltar}>
          Voltar
        </Button>
      </View>
    </LinearGradient>
  )

}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    marginBottom: '50%',
  },
  divisor: {
    marginVertical: 10,
    backgroundColor: 'green',
  },

  info: {
    flexDirection: 'column',
  },

  tituloSecao: {
    marginTop: 10,
    marginBottom: 4,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  badge: {
    color: 'white',
    paddingHorizontal: 10,
    borderRadius: 8,
    alignSelf: 'center',
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});