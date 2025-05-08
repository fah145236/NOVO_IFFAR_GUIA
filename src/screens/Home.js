import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, ActivityIndicator } from 'react-native-paper';
import { supabase } from '../config/supabase';
import { useUsuario } from '../contexto/UsuarioContexto';

export default function Home({ navigation }) {
    const { usuario, perfil, setUsuario, setPerfil, carregando } = useUsuario();

    if (carregando) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <LinearGradient colors={['#dff5eb', '#ffffff']} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image
                    style={styles.img}
                    source={{
                        uri: 'https://www.iffarroupilha.edu.br/component/k2/attachments/download/2364/d41a992a42da72ea71ecdd799fbfcb3b',
                    }}
                />
                <Text style={styles.titulo}>Olá, {perfil?.nome || 'Visitante'}</Text>
                <Text style={styles.subtitulo}>Guia Acadêmico IFFar</Text>

                <Button
                    mode="contained"
                    style={styles.botao}
                    onPress={() => navigation.navigate('Cursos')}
                >
                    Ver Cursos
                </Button>

                <Button
                    mode="contained"
                    style={styles.botao}
                    onPress={() => navigation.navigate('Eventos')}
                >
                    Ver Eventos
                </Button>

                <Button
                    mode="outlined"
                    style={styles.botao}
                    onPress={() => navigation.navigate('Sobre')}
                >
                    Sobre o app
                </Button>

                <Button
                    mode="text"
                    style={styles.sair}
                    onPress={async () => {
                        await supabase.auth.signOut();
                        setUsuario(null); // <- limpa o contexto
                        setPerfil(null);  // <- limpa o contexto
                        navigation.replace('Login');
                    }}
                >
                    Sair
                </Button>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        textAlign: 'center',
    },
    subtitulo: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
    },
    botao: {
        marginVertical: 10,
    },
    sair: {
        marginTop: 20,
        alignSelf: 'center',
    },
    img: {
        resizeMode: 'contain',
        height: 200,
        marginBottom: 15,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
});
