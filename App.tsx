import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [isThundering, setIsThundering] = useState(false);

  const handleThunder = () => {
    if (isThundering) return;
    setIsThundering(true);
    setTimeout(() => {
      setIsThundering(false);
    }, 3000);
  };

  return (
    <>
      <div class={`flex flex-col min-h-screen ${isThundering ? 'animate-shake' : ''}`}>
        <Header onThunder={handleThunder} />
        <main class="flex-grow w-full max-w-[1600px] mx-auto px-4 lg:px-8 py-6 space-y-6 relative z-0">
          <Dashboard />
        </main>
        <footer class="mt-auto py-6 text-center text-xs text-text-muted border-t border-gray-200 dark:border-[#282f43]">
          <p>© 2024 PolicyDiary Government Systems. Confidential & Proprietary.</p>
        </footer>
      </div>
      
      {/* Cloud Overlay */}
      <div class={`storm-cloud ${isThundering ? 'active' : ''}`}></div>

      {/* Thunder & Rain Effect Overlay */}
      {isThundering && (
        <div class="fixed inset-0 z-[100] pointer-events-none">
            {/* Darken Screen */}
            <div class="absolute inset-0 bg-black/40 mix-blend-multiply dark-storm-overlay transition-all duration-300"></div>
            
            {/* Rain Layers */}
            <div class="rain-layer"></div>
            <div class="rain-layer-2" style={{ animationDelay: '0.1s' }}></div>

            {/* Lightning Flash */}
            <div class="absolute inset-0 animate-lightning mix-blend-hard-light"></div>
        </div>
      )}
    </>
  );
};

export default App;