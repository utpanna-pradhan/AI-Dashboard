import React from "react";
import NewMod from './NewMod';
import { useState } from 'react';

function Card({ avatar }) {
     const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center">
        <h2 className="font-semibold">
          Name :{avatar.firstName} {avatar.lastName}
        </h2>
        Preview Image :
        <img
          src={avatar.image}
          alt={avatar.firstName}
          className="w-24 h-24 rounded-full mb-4 object-cover"
        />
        <button className="cursor-pointer mt-2 px-4 py-2 bg-blue-950 text-white rounded hover:bg-green-500 
        transition"  onClick={() => setIsModalOpen(true)}>
          Edit
        </button>
         <NewMod isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
}

export default Card;
