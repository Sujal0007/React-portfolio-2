import React, { useState } from 'react'

const projectData = [
    {
      imgUrl: "/projectimg/6db4d750-8703-454c-8427-df5dcf34a24f.jpeg",
      detail: "Note-taking app with canvas and quill editor for dynamic, rich text and visual note creation.",
      githubLink: "https://github.com/Sujal0007/SuperNote",
      liveDemo: "https://super-notes-app.netlify.app/",
      title: "Note Taking App",
      skills: ['Html','Css','JavaScript','JSON','LocalStorage']
    },
    {
      imgUrl: "/projectimg/Screenshot (59).jpg",
      detail: "Easily build and customize forms with drag-and-drop , then preview and manage  forms ",
      githubLink: "https://github.com/Sujal0007/Form-builder",
      liveDemo: "https://myformbuilder.netlify.app/",
      title: "Form Builder",
      skills: ['Html','Css','JavaScript','JSON','LocalStorage']
    },
    {
      imgUrl: "/projectimg/2d7a0e5b-5a80-4bbb-b872-8dfc4b683d15.jpeg",
      detail: "A website with rendering based on search and cart functionality.",
      githubLink: "https://github.com/Sujal0007/groceryapp",
      liveDemo: "https://mygrocerysite.netlify.app/",
      title: "Grocery Site",
      skills: ['Html','Css','JavaScript','JSON','LocalStorage']
    },
    {
      imgUrl: "/projectimg/Screenshot (58).jpg",
      detail: "Create and manage quizzes effortlessly with our app, featuring customizable questions, real-time previews, and seamless score tracking.",
      githubLink: "https://github.com/Sujal0007/quiz-maker",
      liveDemo: "https://yourquizmaker.netlify.app/",
      title: "Quiz Maker App",
      skills: ['Html','Css','JavaScript','JSON','LocalStorage']
    },
    {
      imgUrl: "/projectimg/Screenshot 2024-10-04 102705.png",
      detail: " Apple clone with good UI and Category Based Rendering",
      githubLink: "https://github.com/Sujal0007/i-Clone",
      liveDemo: "https://iclonereact.netlify.app/",
      title: "Apple Clone",
      skills: ['HTML5' , 'CSS3' , 'REACT' , 'React Router']
    },
    {
      imgUrl: "/projectimg/Screenshot 2024-10-04 102751.png",
      detail: "News App with features like infitine Scroll , Search Based On Routing , Category Based Rendering and filtering",
      githubLink: "https://github.com/Sujal0007/News-App",
      liveDemo: "https://nbcnewsreact.netlify.app/",
      title: "News App",
      skills: ['HTML5' , 'CSS3' , 'REACT' , 'React Router' , 'Mirage js']
    },
  ];


export default function Projects() {
    const [viewAll , setViewAll] = useState(false);

    const handleBtnViewAll = () => {
        setViewAll(true);
    }

  return (
    <>
      <div className='project-head' id='projects'> <h1>Here are a few of my favorite projects.</h1><div className='bar'></div></div>
      <div className='my-project-section-div'>
      <div className='render-project-section-div'>
            {
                (viewAll ? projectData : projectData.slice(0, 3)).map((item,index) => <div className='project-details-render' key={index}>
                        <div className='project-image-div'>
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <div className='project-details-div'>
                            <div className='icon-git'>
                                <h2>{item.title}</h2>
                                <div className='pro-links'>
                                <a href={item.githubLink} target="_blank"><i class="fab fa-github"></i></a>
                                <a href={item.liveDemo} target="_blank"><i class="fa-solid fa-link"></i></a>
                                </div>
                            </div>
                            <p>{item.detail}</p>
                            <ul>
                                {item.skills.map((item,index)=><li key={index}>{item}</li>)}
                            </ul>
                        </div>
                </div>)
            }
        </div>
        <button className={viewAll ? "veiw-all_hide" : "veiw-all" } onClick={handleBtnViewAll}>View All</button>
    </div>
            </>
  )
}