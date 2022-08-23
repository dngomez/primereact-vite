import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'primeflex/primeflex.css';
import './flags.css';
import App from './App';
import DataTableDemo from './demo/DataTableDemo';
import CalendarDemo from './demo/CalendarDemo';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='center'>
      <App />
      <DataTableDemo />
      <CalendarDemo />
    </div>
  </React.StrictMode>
)
