import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import Navbar from '../Navbar/Navbar';

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
