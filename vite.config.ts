// import { defineConfig, loadEnv } from 'vite'
// import react from '@vitejs/plugin-react'
// import process from 'process';

// // https://vite.dev/config/
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//   return {
//     define: {
//       'process.env': env
//     },
//     plugins: [react()],
//   }
// })

// import { defineConfig, loadEnv } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig(({ mode }) => {
//   // Load ONLY VITE_ variables
//   const env = loadEnv(mode, process.cwd(), 'VITE_')

//   return {
//     plugins: [react()],
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

