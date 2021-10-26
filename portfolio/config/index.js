const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'react-portfolio-tikesh24.vercel.app'
