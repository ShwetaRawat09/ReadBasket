import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FilterProvider, CartProvider } from "./Context/ContextIndex.jsx";

let x = document.getElementById('root');

ReactDOM.createRoot(x).render(
    <CartProvider>
    <FilterProvider>
      <ToastContainer closeButton={false} autoClose={3000} position={"bottom-right"} />
      <App />
    </FilterProvider>
  </CartProvider>
);