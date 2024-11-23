import Navbar from "./components/Navbar/Navbar";
import Intro from"./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Project from"./components/projects/Project";
import Contact from"./components/Contact/Contact";
import Footer from"./components/Footer/Footer";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro />
     <Skills />
     <Project />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
