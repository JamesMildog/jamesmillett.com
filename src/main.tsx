import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './index.css'
import Maintenance from './Maintenance.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Maintenance />
    <Analytics />
    <SpeedInsights />
  </StrictMode>,
)
