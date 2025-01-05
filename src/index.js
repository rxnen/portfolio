import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Main2024 from './Main2024';

export default function App() {
  return (
      <React.StrictMode>
        <Main2024 />
      </React.StrictMode>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);