import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';
import CursosCard from './CursosCard';

import { supabase } from '../config/supabase';

export default function Cursos({navigation}) {

  const [cursos, setCursos] = useState([]);
  const [carregando, setCarregando] = useState(true)

  useEffect(()=>{
    async function buscarCursos() {
      const {data, error} = await supabase.from('cursos'). select('*');

      if(error){
        console.log(error);
      }

      else{
        setCursos(data);
      }
      setCarregando(false);

    }


    buscarCursos();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Lista de Cursos</Text>
      <ScrollView style={styles.scrool}>
        {carregando && <ActivityIndicator animating/>}
        {!carregando && cursos.length==0 && <Text>Não tem registros</Text>}
        {cursos.map((curso, index) => (
            <CursosCard key={index} {...curso} onPress={() => navigation.navigate('DetalheCurso', curso)}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: { 
    fontSize: 20, 
    marginBottom: 50,
    marginTop: 50,
    borderBottom: '50%'
  },
  scrool:{
    width: '90%',
  }
});
