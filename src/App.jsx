import React, { useState } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { AboutMe } from './pages/AboutMe';
import { Contact } from './pages/Contact';
import { Portfolio } from './pages/Portfolio';
import { Resume } from './pages/Resume';

const pages = {
    'about': AboutMe,
    'portfolio': Portfolio,
    'contact': Contact,
    'resume': Resume,
}

function App() {
  const [selectedRoute, setSelectedRoute] = useState('about');

  function handleRouteClick(route) {
    setSelectedRoute(route);
  }

  const Page = pages[selectedRoute];

  return (
    <div id="page-wrapper">
      <Header 
        selectedRoute={selectedRoute} 
        onRouteClick={handleRouteClick}
      />
      <main>
        {Page && <Page />}
      </main>
      <Footer />

      <style jsx>{`
        main {
          padding: 10px;
          padding-bottom: 50px;
        }  

        #page-wrapper {
          position: relative;
          min-height: 100vh;
          background-image: url(./images/background.png);
          background-repeat: no-repeat;
          background-size: cover;
          color: white;
        }
        
      `}</style>
    </div>
  );
}

export default App;
