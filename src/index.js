import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom'
import axios from 'axios';
import { Provider } from 'react-redux'
import { store } from './store';
import { ToastContainer, toast } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = "https://movie-ticket-backend-urs5.onrender.com/"
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />

    <ToastContainer
position="top-right"
autoClose={2000}
closeOnClick
pauseOnFocusLoss
pauseOnHover
theme="light"
/>

<ToastContainer />
    </Provider>
    
    </BrowserRouter>
  </React.StrictMode>
);

