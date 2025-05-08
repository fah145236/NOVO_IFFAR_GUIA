import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { supabase } from '../config/supabase';

export default function Loading({ navigation }) {
  useEffect(() => {
    const session = supabase.auth.session(); // Válido para versão 1.x

    if (session?.user) {
      navigation.replace('Tabs');
    } else {
      navigation.replace('Login');
    }
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}

