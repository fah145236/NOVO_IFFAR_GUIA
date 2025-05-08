import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';
import EventosCard from './EventosCard';
import { Text, ActivityIndicator, FAB } from 'react-native-paper';
import { supabase } from '../config/supabase';
import { LinearGradient } from 'expo-linear-gradient';

export default function Eventos({ navigation }) {
  const [eventos, setEventos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [tipoUsuario, setTipoUsuario] = useState('');

  useEffect(() => {
    async function buscarEventos() {
      const { data, error } = await supabase.from('eventos').select('*');
      if (error) {
        console.log(error);
      } else {
        setEventos(data);
      }
      setCarregando(false);
    }

    async function buscarTipoUsuario() {
      const user = supabase.auth.user(); // <-- versão 1.x
    
      if (user) {
        const { data, error } = await supabase
          .from('usuarios')
          .select('tipo')
          .eq('id', user.id)
          .single();
    
        if (!error && data) {
          setTipoUsuario(data.tipo);
        }
      }
    }

    buscarEventos();
    buscarTipoUsuario();
  }, []);

  function handleNovoEvento() {
    if (tipoUsuario === 'admin') {
      navigation.navigate('NovoEvento');
    } else {
      Alert.alert('Acesso negado', 'Acesso apenas para administradores.');
    }
  }

  return (
    <LinearGradient colors={['#dff5eb', '#ffffff']} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Eventos Acadêmicos</Text>
        <ScrollView style={styles.scrool}>
          {carregando && <ActivityIndicator animating />}
          {!carregando && eventos.length === 0 && <Text>Não tem registros</Text>}
          {eventos.map((evento, index) => (
            <EventosCard
              key={index}
              {...evento}
              onPress={() => navigation.navigate('DetalheEventos', evento)}
            />
          ))}
        </ScrollView>

        <FAB
          icon="plus"
          style={styles.fab}
          onPress={handleNovoEvento}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    marginBottom: 50,
    marginTop: 50,
  },
  scrool: {
    width: '90%',
  },
  fab: {
    backgroundColor: '#1C9B5E',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
