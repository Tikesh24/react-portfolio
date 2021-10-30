const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://react-portfolio-ecru-five.vercel.app/'
