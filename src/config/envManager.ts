const NODE_ENV = process.env.NODE_ENV
const configMap = {
  production: {
    BASE_API_URL: process.env.NEXT_PUBLIC_API_BASE_URL || '',
    BASE_API_KEY: process.env.NEXT_PUBLIC_API_BASE_KEY || '',
    BASE_API_SUPABASE_PASSWORD: process.env.NEXT_PUBLIC_API_SUPABASE_PASSWORD || ''
  },
  development: {
    BASE_API_URL: process.env.NEXT_PUBLIC_API_BASE_URL || '',
    BASE_API_KEY: process.env.NEXT_PUBLIC_API_BASE_KEY || '',
    BASE_API_SUPABASE_PASSWORD: process.env.NEXT_PUBLIC_API_SUPABASE_PASSWORD || ''
  },
  test: {
    BASE_API_URL: process.env.NEXT_PUBLIC_API_BASE_URL || '',
    BASE_API_KEY: process.env.NEXT_PUBLIC_API_BASE_KEY || '',
    BASE_API_SUPABASE_PASSWORD: process.env.NEXT_PUBLIC_API_SUPABASE_PASSWORD || ''
  }
}

export const ENVIRONMENT = {
  ...configMap[NODE_ENV as keyof typeof configMap]
}
