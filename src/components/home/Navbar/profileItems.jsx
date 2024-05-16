import React from "react";
import { Link } from "react-router-dom";

const ProfileItem = ({ path, title }) => {
  return (
    <div className="p-2 hover: w-full flex rounded-lg">
      <Link to={path} className="sidebar-item-link">
        <span className="font-[750] text-[14px]">{title}</span>
      </Link>
    </div>
  );
};

export default ProfileItem;
