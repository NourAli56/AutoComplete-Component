import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLoader from './components/general/page-loader/PageLoader';
import Home from './pages/Home';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);
  return (
    <div className="homee_app">

      {
        isLoading ? (
          <PageLoader />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        )
      }
    </div >
  );
}

export default App;