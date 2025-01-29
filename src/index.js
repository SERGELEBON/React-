import React from 'react';
import ReactDOM from 'react-dom/client'; // Utilisez `react-dom/client` pour React 18
import './styles/index.css';
import App from './components/App';

// Créez une racine pour le rendu avec `createRoot`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
