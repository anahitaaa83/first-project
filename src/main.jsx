
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./index.css"
import { BrowserRouter } from 'react-router';
import UsercontextProvider from './Usercontext.jsx';

createRoot(document.getElementById('root')).render(

<UsercontextProvider>
     <App />
</UsercontextProvider>



 
);
