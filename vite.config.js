import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: [
      'all', // Allow all hosts (or specify explicitly)
      'online-shopping-app-alb-1480026013.us-east-1.elb.amazonaws.com', // Added my Application Load Balancer name here
      'svamsikrishna.in' // Added your domain here
    ],
    cors: true
  }
});

