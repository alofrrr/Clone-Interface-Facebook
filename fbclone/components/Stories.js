/* eslint-disable react/jsx-key */
import React from "react";
import StoryCard from "./StoryCard";
import Perfil from '../public/Perfil.jpg'


const stories = [
  {
    name: "Ana Laura",
    src: "https://i.ibb.co/BPrXCtt/Whats-App-Image-2021-12-16-at-00-27-08.jpg",
    profile: "/Perfil.jpg",
  },
  {
    name: "Glória Maria",
    src: "https://i.ibb.co/Q8SY7L2/Screenshot-2.jpg",
    profile: "https://i.ibb.co/MkXpkG0/Screenshot-1.jpg",
  },
  {
    name: "Gretchen",
    src: "https://i.ibb.co/zPDfNQk/Screenshot-6.jpg",
    profile: "https://i.ibb.co/mGC4WBd/Screenshot-5.jpg",
  },
  {
    name: "Mano Brown",
    src: "https://i.ibb.co/7tVWDQ0/Screenshot-4.jpg",
    profile: "https://i.ibb.co/Njh3nH3/Screenshot-3.jpg",
  },
  {
    name: "Thomas Shelby",
    src: "https://i.ibb.co/VgQnFGX/Screenshot-2.jpg",
    profile: "https://i.ibb.co/4dST1vk/Screenshot-11.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;