import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import { fileURLToPath } from "url"

// Declare minimal process typing to avoid requiring @types/node
declare const process: { env?: Record<string, string | undefined> }

// Use repo name when running in GitHub Actions to set base for GitHub Pages
const repoName = process.env?.GITHUB_REPOSITORY?.split('/')?.[1]
const isCI = process.env?.GITHUB_ACTIONS === 'true'

export default defineConfig({
  base: isCI && repoName ? `/${repoName}/` : '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./src"),
    },
  },
})