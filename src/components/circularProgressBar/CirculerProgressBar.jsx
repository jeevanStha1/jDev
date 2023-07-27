import React, { useEffect, useState } from 'react';
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import "./circular.scss";

function CircularProgressBar({width,title}) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < width) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  return (
    

      <div className='circularProgress d-flex flex-column justify-content-center' >
        <CircularProgressbar strokeWidth={5} styles={buildStyles({
          textColor: "black",
          pathColor: "white",
          trailColor: "aqua"
        })} value={percentage} text={`${percentage}%`}/>
        <span className='mt-3 text-center fw-bold fs-4'>{title}</span>
      </div>
    
  );
}
export default CircularProgressBar;