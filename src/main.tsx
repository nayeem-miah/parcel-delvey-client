import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import { router } from './routes/Index.tsx'
import { ThemeProvider } from './provider/theme-provider.tsx'
import { Toaster } from "@/components/ui/sonner"
import { Provider as ReduxProvider } from "react-redux"
import { store } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </ReduxProvider>

  </StrictMode>,
)
