import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import preset from '@rebass/preset'
import { ThemeProvider } from 'emotion-theming'
import ClientRoutes from './routes/ClientRoutes'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={preset}>
      <Suspense fallback={<h1>Loading</h1>}>
        <ClientRoutes />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
