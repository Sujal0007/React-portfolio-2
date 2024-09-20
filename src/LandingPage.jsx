import Header from "./Header";

export default function LandingPage(){
    return(
        <>
        <Header/>
        <div className="icons">
        <div className="landing-page">
        <div className="landing-detail">
            <h2>Hey, I'm Sujal.</h2>
            <h1>I enjoy <span>building</span> and <span>designing </span> for the web.</h1>
            <button>Tell Me More</button>
        </div>
       
        </div>
        <img className="head-i" src="/landingimg/Screenshot 2024-09-20 163538.png" alt="" />
        <img  className="head-i1" src="/landingimg/Screenshot 2024-09-20 164953.png" alt="" />
        <img className="head-i2" src="/landingimg/Screenshot 2024-09-20 163509.png" alt="" />
        <img className="head-i3" src="/landingimg/Screenshot 2024-09-20 163527.png" alt="" />
       
        </div>
        </>
    )
}