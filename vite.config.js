import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default () => {
  let plugins = [react()];
  process.env = { ...process.env };
  const viteEnv = {};
  Object.keys(process.env).forEach((key) => {
    if (key.startsWith(`VITE_`)) {
      viteEnv[`import.meta.env.${key}`] = process.env[key];  // <-
    }
  });
  return defineConfig({
    plugins,
    ...{ define: viteEnv }
  })
}

