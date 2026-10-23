import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: "./src/config" // add this in vite.config.js rest is written by default , deifne folder where .env | .env.local | .env.production exist dont give exact path
})
