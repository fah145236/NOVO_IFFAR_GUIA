import { ScrollView, StyleSheet } from "react-native";
import { Card, Divider, Text, Button } from "react-native-paper";

export default function DetalheCurso({ route, navigation }) {

  const {
    nome,
    modalidade,
    nivel,
    unidade,
    duracao,
    turno,
    descricao
  } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Card mode='outline' style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge">
            {nome}
          </Text>

          <Divider style={styles.divisor} />

          <Text variant="bodyMedium">
            Modalidade: {modalidade}
            Nível: {nivel}
            Unidade: {unidade}
            Duração: {duracao}
            Turno: {turno}
          </Text>

          <Divider style={styles.divisor} />

          <Text variant="titleSmall">Descrição</Text>
          <Text variant="bodyMedium">{descricao}</Text>

          <Button mode="contained" onPress={() => navigation.navigate('Cursos')} style={styles.botaoVoltar}>
            Voltar
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  card: {
    padding: 10,
  },
  divisor: {
    marginVertical: 10,
  },
  tituloSecao: {
    marginTop: 10,
    marginBottom: 4,
  }
});