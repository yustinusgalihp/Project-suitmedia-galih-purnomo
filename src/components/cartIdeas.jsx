import React from "react";
import cartIdeas from "@/assets/asset4.jpeg";

function CartIdeas({ created_at, title }) {
  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(created_at));

  return (
    <div className="border border-[#e4e4e4] h-full mb-4 overflow-hidden group transition rounded-2xl hover:scale-105">
      <div className="w-full">
        <img
          className="items-center w-[19rem] h-[10rem] object-cover"
          src={cartIdeas}
          alt="Photo-Ideas"
        />
      </div>
      <div className="p-4">
        <p className="mb-2">{formattedDate}</p>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
      </div>
    </div>
  );
}

export default CartIdeas;
