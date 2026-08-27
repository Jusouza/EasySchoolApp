import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Build separado do Storybook: gera um único index.html autocontido
// (JS, CSS e fonte embutidos) com o protótipo navegável, para compartilhar
// por e-mail/WhatsApp e abrir offline direto no navegador.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: 'dist-standalone',
    emptyOutDir: true,
    cssCodeSplit: false,
    assetsInlineLimit: 100_000_000,
  },
});
