import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import { fileURLToPath } from "url"

// Declare minimal process typing to avoid requiring @types/node
declare const process: { env?: Record<string, string | undefined> }

// For user pages (username.github.io), base should be '/'
// For project pages, it would be '/repo-name/'
const repoName = process.env?.GITHUB_REPOSITORY?.split('/')?.[1]
const isUserPage = repoName?.endsWith('.github.io')
const isCI = process.env?.GITHUB_ACTIONS === 'true'

export default defineConfig({
  base: isCI && !isUserPage && repoName ? `/${repoName}/` : '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./src"),
    },
  },
})