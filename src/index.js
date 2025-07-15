import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../App';
import '../styles.css';
import 'sweetalert2/dist/sweetalert2.min.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render( <App /> ); 
