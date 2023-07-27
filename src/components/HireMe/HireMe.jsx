import React from 'react';
import "./hireme.scss";

function HireMe() {
  return (
    <div className='hireMe'>
        <div className="container w-75 d-flex gap-4 flex-column justify-content-center align-items-center">
            <h1 className='text-white'>I Am Avaliable For Freelancer.</h1>
            <button className='rounded-1 fw-bold border-2 border border-white'>Hire Me!</button>
        </div>
    </div>
  )
}

export default HireMe;