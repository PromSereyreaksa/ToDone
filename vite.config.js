import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vitePlugin as remix } from '@remix-run/dev';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),     tailwindcss(), remix()],

})
