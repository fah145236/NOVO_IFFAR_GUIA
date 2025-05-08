import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text, ActivityIndicator } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { supabase } from '../config/supabase';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NovoEvento({ navigation }) {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState('');
    const [local, setLocal] = useState('');
    const [inscricao, setInscricao] = useState('');
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('');

    async function salvarEvento() {
        setCarregando(true);
        setErro('');

        if (!titulo || !descricao || !data || !inscricao) {
            setErro('Preencha todos os campos obrigatórios.');
            setCarregando(false);
            return;
        }

        const { error } = await supabase
            .from('eventos')
            .insert([{ titulo, descricao, data, local, inscricao }]);

        setCarregando(false);

        if (error) {
            console.log(error);
            setErro('Erro ao salvar evento.');
        } else {
            navigation.goBack();
        }
    }

    return (
        <LinearGradient colors={['#dff5eb', '#ffffff']} style={{ flex: 1 }}>
            <SafeAreaView>
                <ScrollView contentContainerStyle={styles.container}>
                    <Image
                        style={styles.img}
                        source={{ uri: 'https://www.iffarroupilha.edu.br/component/k2/attachments/download/2364/d41a992a42da72ea71ecdd799fbfcb3b' }}
                    />
                    <Text style={styles.titulo}>Novo Evento</Text>

                    <TextInput
                        label="Título"
                        value={titulo}
                        onChangeText={setTitulo}
                        mode="outlined"
                        theme={{
                            roundness: 12,
                            colors: {
                                text: '#000',
                                primary: '#2e7d32',
                                background: '#f2e6f9',
                            }
                        }}
                        style={styles.input}
                    />
                    <TextInput
                        label="Descrição"
                        value={descricao}
                        onChangeText={setDescricao}
                        multiline
                        numberOfLines={4}
                        mode="outlined"
                        theme={{
                            roundness: 12,
                            colors: {
                                text: '#000',
                                primary: '#2e7d32',
                                background: '#f2e6f9',
                            }
                        }}
                        style={styles.input}
                    />
                    <TextInput
                        label="Data (ex: 25/12/2025)"
                        value={data}
                        onChangeText={setData}
                        mode="outlined"
                        theme={{
                            roundness: 12,
                            colors: {
                                text: '#000',
                                primary: '#2e7d32',
                                background: '#f2e6f9',
                            }
                        }}
                        style={styles.input}
                    />
                    <TextInput
                        label="Local"
                        value={local}
                        onChangeText={setLocal}
                        mode="outlined"
                        theme={{
                            roundness: 12,
                            colors: {
                                text: '#000',
                                primary: '#2e7d32',
                                background: '#f2e6f9',
                            }
                        }}
                        style={styles.input}
                    />

                    <Text style={{ marginBottom: 8, fontSize: 16 }}>Inscrição</Text>
                    <View style={styles.radioContainer}>
                        {['Aberta', 'Fechada'].map((item) => (
                            <TouchableOpacity
                                key={item}
                                style={styles.radioItem}
                                onPress={() => setInscricao(item)}
                            >
                                <View style={[styles.radioOuter, inscricao === item && styles.radioOuterSelected]}>
                                    {inscricao === item && <View style={styles.radioInner} />}
                                </View>
                                <Text style={styles.radioLabel}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {erro !== '' && <Text style={styles.erro}>{erro}</Text>}
                    {carregando ? (
                        <ActivityIndicator animating />
                    ) : (
                        <Button mode="contained" onPress={salvarEvento} style={styles.botao}>
                            Cadastrar Evento
                        </Button>
                    )}
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        marginBottom: 20,
        alignSelf: 'center',
    },
    input: {
        marginBottom: 16,
        color: 'black',
        borderRadius: 20,
    },
    botao: {
        marginTop: 10,
        padding: 6,
    },
    erro: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
    img: {
        resizeMode: 'contain',
        height: 200,
        marginBottom: 15,
        width: 200,
        alignSelf: 'center',
    },
    radioContainer: {
        marginBottom: 20,
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    radioOuter: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#1C9B5E',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    radioOuterSelected: {
        borderColor: '#1C9B5E',
    },
    radioInner: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#1C9B5E',
    },
    radioLabel: {
        fontSize: 16,
        color: '#000',
    },
});
