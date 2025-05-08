import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra || Constants.manifest.extra;

const supabaseUrl = extra.supabaseUrl;
const supabaseKey = extra.supabaseKey;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ SUPABASE_URL ou SUPABASE_KEY está indefinido. Verifique seu app.config.js e .env');
}

export const supabase = createClient(supabaseUrl, supabaseKey);



