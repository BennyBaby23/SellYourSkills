 import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import { router } from './Routes/index.jsx'; 
import './index.scss'
import {app, auth} from "./firebaseConfig.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
     <ToastContainer />
  </React.StrictMode>,
)
