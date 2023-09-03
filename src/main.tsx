import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { FirstComponent } from './FirstComponent.tsx'
// import { CounterApp } from './CounterApp.tsx'
import { FirstComponent } from './FirstComponent';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <CounterApp value={0} />  */}
    <App />
    <FirstComponent subTitle={7} name='Fernando Almanza' title='Soy el mejor' />
    <FirstComponent subTitle={7} title='Soy el mejor' />
  </React.StrictMode>,
)
