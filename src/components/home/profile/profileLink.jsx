import React from "react";
import { Link } from "react-router-dom";
function ProfileLink({ image, name, email }) {
  return (
    <div className="p-2 rounded-lg">
      <Link to={"/profile"} className="sidebar-item-link">
        {/* <Image className=' rounded-full' src={image} alt='' width={35} height={35} /> */}
        <span>
          {" "}
          {name}
          {/* <span className=' text-sm'>{email}</span> */}
        </span>
      </Link>
    </div>
  );
}

export default ProfileLink;
