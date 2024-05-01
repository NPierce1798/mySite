import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css';
import App from './App';
import Home from './components/home/home';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },{
        path: '/projects',
        element: <Portfolio />
      },{
        path: '/resume',
        element: <Resume />
      }
    ]
  }
]);


root.render(
  <React.StrictMode>

      <RouterProvider router={router} />

  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

