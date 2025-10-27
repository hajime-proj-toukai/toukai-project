
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import ElevatorLoader from './components/feature/ElevatorLoader';

function App() {
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  return (
    <BrowserRouter basename={__BASE_PATH__}>
      {showLoader && <ElevatorLoader onComplete={handleLoaderComplete} />}
      <div className={`transition-opacity duration-500 ${showLoader ? 'opacity-0' : 'opacity-100'}`}>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
