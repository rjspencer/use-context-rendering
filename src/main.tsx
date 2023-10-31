import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ComplexStateProvider, GlobalStateProvider } from './providers'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalStateProvider>
    <ComplexStateProvider>
      <App />
    </ComplexStateProvider>
  </GlobalStateProvider>,
)
