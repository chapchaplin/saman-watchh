import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  // بارکردنی گۆڕدراوەکانی ژینگە (Environment Variables)
  const env = loadEnv(mode, '.', '');
  
  return {
    // گۆڕینی base بۆ ناوی پڕۆژەکەت لە گێتهاب بۆ چارەسەری هەڵەی 404
    base: '/saman-watchh/', 
    
    plugins: [react(), tailwindcss()],
    
    define: {
      // دڵنیابوونەوە لەوەی کلیلەکە دەناسرێتەوە
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    
    resolve: {
      alias: {
        // ڕێکخستنی ناوی کورتکراوە بۆ فایلەکان
        '@': path.resolve(__dirname, '.'),
      },
    },
    
    server: {
      // ئەم بەشانە وەک خۆی لێ گەڕێ بۆ ئەوەی لەگەڵ AI Studio بگونجێت
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
