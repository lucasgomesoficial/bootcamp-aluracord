import axios from 'axios'
import { createClient } from '@supabase/supabase-js'
import { ENVIRONMENT } from '../../config/envManager'

const supabaseUrl = ENVIRONMENT.BASE_API_URL
const supabaseKey = ENVIRONMENT.BASE_API_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)

export const gateway = axios.create({
  baseURL: supabaseUrl,
  headers: {
    'apikey': supabaseKey
  }
})
