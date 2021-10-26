const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? process.env.PUBLIC_API_URL : 'react-portfolio-tikesh24.vercel.app'
