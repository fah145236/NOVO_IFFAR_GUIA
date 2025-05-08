import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre o App</Text>
      <Text style={styles.info}>
        Este aplicativo é um projeto acadêmico do 
        curso de Sistemas para Internet – Campus Panambi.
      </Text>

      <Button
        style={styles.botao}
        mode="contained"
        onPress={() => 
        Linking.openURL('https://iffarroupilha.edu.br/panambi')}
      >
        Acessar site do campus
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20,
    justifyContent: 'center',
    gap: 50
  },
  titulo: { 
    fontSize: 20, 
    marginBottom: 16 
  },
  info: {
    marginBottom: '50%',
  },
  botao: { 
    marginTop: 20 
  },
});
