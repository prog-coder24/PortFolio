import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import SocialNetwork from "./components/SocialNetwork";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <Container className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Education />
      <SocialNetwork />
      <Contact />
    </Container>
  );
}

export default App;
