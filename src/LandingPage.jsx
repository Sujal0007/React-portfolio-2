import Header from "./Header";
import 'animate.css';

export default function LandingPage(){

    const handleScrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
      };

    return(
        <>
        <Header/>
        <div className="icons">
        <div className="landing-page">
        <div className="landing-detail">
            <h2>Hey, I'm Sujal.</h2>
            <h1>I enjoy <span>building</span> and <span>designing </span> for the web.</h1>
          <button onClick={handleScrollToProjects}>Tell Me More</button>
          <a href="/SujalXp2.pdf"  target="_blank"><button className="resume-btn">Get Resume</button></a>
        </div>
       
        </div>
        <img className="head-i animate__animated animate__shakeY" src="/landingimg/Screenshot 2024-09-20 163538.png" alt="" />
        <img  className="head-i1 animate__animated animate__shakeY" src="/landingimg/Screenshot 2024-09-20 164953.png" alt="" />
        <img className="head-i2 animate__animated animate__shakeY" src="/landingimg/Screenshot 2024-09-20 163509.png" alt="" />
        <img className="head-i3 animate__animated animate__shakeY" src="/landingimg/Screenshot 2024-09-20 163527.png" alt="" />
       
        </div>
        </>
    )
}