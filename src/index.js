import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/pages/About';
import Foster from './components/pages/Foster';
import Volunteer from './components/pages/Volunteer';
import Qualifications from './components/pages/Qualifications';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: 'about',
    element: <About/>
  },
  {
    path: 'foster',
    element: <Foster/>
  },
  {
    path: 'volunteer',
    element: <Volunteer/>
  },
  {
    path: 'qualifications',
    element: <Qualifications/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

