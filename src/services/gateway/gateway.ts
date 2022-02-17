import axios from 'axios'
import { ENVIRONMENT } from '../../config/envManager'

const supabaseUrl = ENVIRONMENT.BASE_API_URL
const supabaseKey = ENVIRONMENT.BASE_API_KEY

export const gateway = axios.create({
  baseURL: supabaseUrl,
  headers: {
    'apikey': supabaseKey
  }
})
