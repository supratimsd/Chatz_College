
// import { defineConfig } from 'vite';
// import tailwindcss from '@tailwindcss/vite';
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
   
//   ],
// });


import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  define: {
    global: {}, // This fixes "global is not defined"
  },
  plugins: [
    tailwindcss(),
  ],
});
