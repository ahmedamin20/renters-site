import React from "react";
import { Link } from "react-router-dom";
function ProfileLink({ image, name, email }) {
  return (
    <div className=" group py-2 rounded-lg">
      <Link to={"/profile"} className="sidebar-item-link group-hover:text-primary transition-all">
          <div className="flex flex-row justify-between w-full h-[200x] rounded-full">
            <img src={image} className="object-cover w-[75px] h-[75px] rounded-full"/>
            <div>
              <h3 className="text-[20px] font-bold">{name}</h3>
              <p className="text-[16px] text-gray-500">{email}</p>
              <Link to={"/profile"} className="text-[12px] text-primary">view</Link>
            </div>
          </div>

      </Link>
    </div>
  );
}

export default ProfileLink;
