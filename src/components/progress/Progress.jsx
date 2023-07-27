import React from 'react';
import "./progress.scss";

function Progress({name, completed}) {

  return (
    <div className="col-lg-6 text-center py-3 fw-bolder">
      <div className=" d-flex justify-content-between">
        <small className=' text-capitalize'>{name}</small>
        <small>{completed}%</small>
      </div>
      <div className='containerStyle'>
        <div className='fillerStyle'  style={{width: `${completed}%`}}>
        </div>
      </div>
    </div>
  )
}

export default Progress;
