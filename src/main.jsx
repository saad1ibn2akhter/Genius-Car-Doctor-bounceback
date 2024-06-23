import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {

  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='bg-white text-black'>
   <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
   </div>
  </React.StrictMode>,
)
