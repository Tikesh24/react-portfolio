const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? process.env.PUBLIC_API_URL : process.env.PUBLIC_API_URL
