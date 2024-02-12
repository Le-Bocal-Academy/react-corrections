import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Accueil from './Pages/Accueil/Accueil';
import Login from './Pages/Login/Login';
import Contact from './Pages/Contact/Contact';

// On créé d'abord le virtual dom
const root = ReactDOM.createRoot(document.getElementById('root'));

// Puis on créé l'ensemble des routes
const router = createBrowserRouter([
  {
    path:"/",
    element: <Accueil/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/contact",
    element: <Contact/>
  },
])

root.render( //Il n'y a plus qu'à render les routes
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

