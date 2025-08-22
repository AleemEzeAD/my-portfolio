import Header from './components/Header';
import Hero from './sections/Hero';
import Demo from './sections/Demo';
import Bottom from './sections/Bottom';
import Overview from './sections/Overview';
import Skills from './sections/Skills';
import AdditionalSkills from './sections/AdditionalSkills';
// import Login from './pages/Login';


function App() {
  return (
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
      {/* <Login /> */}
    </>
  );
}

export default App;

// git checkout main
// git add .
// git commit -am
// git push origin main
// npm run deploy
