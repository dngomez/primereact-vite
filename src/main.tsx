import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'primeflex/primeflex.css';
import './flags.css';
import DataTableDemo from './demo/DataTableDemo';
import CalendarDemo from './demo/CalendarDemo';

import AuthProvider from './components/Auth/AuthProvider';
import RequireAuth from './components/Auth/RequireAuth';
import Layout from './components//Layout/Layout';
import Home from './components/Home';
import Team from './components/Team';
import Teams from './components/Teams';
import LeagueStandings from './components/LeagueStandings';
import Login from './components/Login/Login';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RequireAuth><Layout /></RequireAuth>}>
          <Route index element={<Home />} />
          <Route path="demo">
            <Route path="table" element={<DataTableDemo />} />
            <Route path="calendar" element={<CalendarDemo />} />
          </Route>
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route index element={<LeagueStandings />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
)
