import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React and React DOM
          'react-vendor': ['react', 'react-dom'],
          
          // UI libraries
          'ui-vendor': [
            '@mui/material',
            '@mui/icons-material',
            '@emotion/react',
            '@emotion/styled',
            'react-bootstrap',
            'bootstrap'
          ],
          
          // Animation and effects
          'animation-vendor': [
            'framer-motion',
            'typewriter-effect',
            '@tsparticles/engine',
            '@tsparticles/react',
            '@tsparticles/slim'
          ],
          
          // Icons and other utilities
          'utils-vendor': [
            'react-icons',
            'react-parallax-tilt',
            '@emailjs/browser',
            'web-vitals'
          ]
        }
      }
    },
    // Increase chunk size warning limit to 1000kb
    chunkSizeWarningLimit: 1000
  }
})
