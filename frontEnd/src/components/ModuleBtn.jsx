import React from "react";
import { Link } from "react-router-dom";

const ModuleBtn = ({ name, icon, url }) => {
  return (
    <Link
      to={url}
      className="flex flex-col items-center gap-3 h-full bg-sky-700 p-8 text-white  rounded-lg"
    >
      {icon}
      <h3>{name}</h3>
    </Link>
  );
};

export default ModuleBtn;
