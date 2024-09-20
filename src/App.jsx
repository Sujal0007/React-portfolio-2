import LandingPage from "./LandingPage";
import Projects from "./Projects";
import '@fortawesome/fontawesome-free/css/all.css';
import Skills from "./Skills";
import Connect from "./Remuse";
import Contact from "./Contact";

export default function App(){
  return(
    <>
    <LandingPage/>
    <Projects/>
    <Skills/>
    <Connect/>
    <Contact/>
    </>
  )
}