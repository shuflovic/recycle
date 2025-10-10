require('dotenv').config(); // load .env variables

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;


const { createClient } = require('@supabase/supabase-js');
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

// export { supabaseClient };
