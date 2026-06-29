import './index.css'
import { ViteReactSSG } from 'vite-react-ssg'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Work from './pages/Work'

export const createRoot = ViteReactSSG({
  routes: [
    { path: '/', Component: Home },
    { path: '/privacy-policy', Component: PrivacyPolicy },
    { path: '/work', Component: Work },
  ],
})
