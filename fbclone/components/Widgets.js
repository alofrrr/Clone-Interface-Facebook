import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import React from "react";
import Contact from "./Contact";

function Widgets() {
  const contacts = [
    { src: "https://i.ibb.co/mGC4WBd/Screenshot-5.jpg", name: "Gretchen" },
    { src: "https://links.papareact.com/kxk", name: "Elon Musk" },
    { src: "https://i.ibb.co/MkXpkG0/Screenshot-1.jpg", name: "Glória Maria" },
    { src: "https://links.papareact.com/snf", name: "Mark Zuckerberg" },
    { src: "https://i.ibb.co/4dST1vk/Screenshot-11.jpg", name: "Thomas Shelby" },
    { src: "https://i.ibb.co/tY1WDHg/Screenshot-1.jpg", name: "Bill Gates" },
    { src: "https://links.papareact.com/6gg", name: "Elizabeth II" },
    { src: "https://i.ibb.co/Njh3nH3/Screenshot-3.jpg", name: "Mano Brown" },
    { src: "https://i.ibb.co/Fxxq3X2/Screenshot-3.jpg", name: "Harry Potter" }
  ];

  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-3">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;