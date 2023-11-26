import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import './index.css';
import Main from './App';
import NoPage from './NoPage';
import ElderSafe, {PrivacyPolicy} from './eldersafe/ElderSafe';
import ProjectGallery from './ProjectGallery';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="project-gallery" element={<ProjectGallery />} />  
          <Route path="eldersafe" element={<ElderSafe />} />
          <Route path='eldersafe/privacy' element={<PrivacyPolicy />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);