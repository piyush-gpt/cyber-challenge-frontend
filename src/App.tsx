import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import UploadCenter from './pages/UploadCenter';
import ReportingPlatform from './pages/ReportingPlatform';
import AwarenessHub from './pages/AwarenessHub';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/upload-center" element={<Layout><UploadCenter /></Layout>} />
      <Route path="/reporting" element={<Layout><ReportingPlatform /></Layout>} />
      <Route path="/awareness" element={<Layout><AwarenessHub /></Layout>} />
    </Routes>
  );
}

export default App;