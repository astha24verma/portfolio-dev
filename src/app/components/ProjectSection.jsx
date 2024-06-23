import React from "react";
import ProjectCard from "./ProjectCard";
const projectsData = [
  {
    id: 1,
    title: "Face recognition app",
    description:
      "Web application, powered by the face-api.js library, to facilitate a user-friendly registration and login process.",
    image: "/images/projects/facereccimg.png",
    gitUrl: "https://github.com/astha24verma/face-recognition-app",
    previewUrl: "https://face-recognition-app0024.netlify.app/",
  },
  {
    id: 2,
    title: "Prompter",
    description:
      "A NextJS application to create profile and share prompts online ",
    image: "/images/projects/prompterimg.png",
    gitUrl: "https://github.com/astha24verma/prompter",
    previewUrl: "https://prompter-brown.vercel.app/",
  },
  {
    id: 3,
    title: "URL Shortener app",
    description:
      "A Full Stack app to shorten the long URLs with JWT token-based authentication",
    image: "/images/projects/urlimg.png",
    gitUrl: "https://github.com/astha24verma/short-url",
    previewUrl: "http://url-shortener-env.eba-q8gj37cu.ap-south-1.elasticbeanstalk.com/",
  },
  {
    id: 4,
    title: "Personalized Wardrobe and Outfit Recommendation System",
    description:
      "A web application to digitally organize and manage clothing collection while utilizing ML to give recommendations based on user's existing wardrobe. ",
    image: "/images/projects/pworsimg.png",
    gitUrl: "https://github.com/Prashantsgh/Sign-Language-Detection",
    previewUrl: "",
  },
];

const ProjectSection = () => {
  return (
    <div>
      <h1
        className=" text-center mb-8 text-3xl sm:text-3xl lg:text-5xl font-extrabold
                text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-800"
      >
        My Projects
      </h1>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 justify-center text-center align-center">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
