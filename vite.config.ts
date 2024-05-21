import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: [
      { find: '@', replacement: '/src/*' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@validation', replacement: '/src/utils/validations.ts' },
      { find: '@auth-interface', replacement: '/src/interface/auth.ts' },
      { find: '@global-interface', replacement: '/src/interface/auth.ts' },
      { find: '@modals', replacement: '/src/components/modals' },
      { find: '@data-service', replacement: '/src/utils/data-service.ts' },
      { find: '@notification', replacement: '/src/utils/notification.ts' },
      { find: '@service', replacement: '/src/service' },
      { find: '@table', replacement: '/src/components/ui/table.tsx' },
    ]
  }
})
