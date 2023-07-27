import React from "react";
import "./Title.scss";

function Title({name ,desc}) {
  return (
    <div className="title text-center">
      <h4 className="text-info">{name}</h4>
      <p className="text-info">*</p>
      <h6 className=" w-75 m-auto opacity-75">{desc}</h6>
    </div>
  );
}

export default Title;
