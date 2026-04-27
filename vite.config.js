import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // Disable strict host checking to allow CodeSandbox's dynamic custom domains mapping
    allowedHosts: true,
  }
});
