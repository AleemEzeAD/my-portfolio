import { useState } from "react";

import Header from './components/Header';
import Hero from './sections/Hero';
import Demo from './sections/Demo';
import Bottom from './sections/Bottom';
import Overview from './sections/Overview';
import Skills from './sections/Skills';
import AdditionalSkills from './sections/AdditionalSkills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import MultiProj from './sections/MultiProj';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import BackToTop from "./components/BackToTop";
import SplashScreen from "./components/SplashScreen";

import Login from './pages/Login';
// import Register from './pages/Register';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <Header />
          <Hero />
          <Bottom />
          <Demo />
          <Bottom />
          <Overview />
          <Bottom />
          <Skills />
          <Bottom />
          <AdditionalSkills />
          <Bottom />
          <Experience />
          <Bottom />
          <Projects />
          <Bottom />
          <MultiProj />
          <Bottom />
          <Education />
          <Bottom />
          <Contact />
          <Bottom />
           <Footer />
          <BackToTop /> 
        </>
      )}
    </>
  );
}

export default App;

// git checkout main
// git add .
// git commit -am
// git push origin main
// npm run deploy 