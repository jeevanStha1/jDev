import React from 'react';
import "./newsletter.scss";
import {IoMailUnreadOutline} from "react-icons/io5";
import Title from '../title/Title';

function NewsLetter() {
  return (
    <div className='newsletter bg-white' id='Blog'>
        <div className="container w-75">
            <div className="heading">
                <Title name={'Newsletter'}/>
            </div>
            <div className="newsletter__section py-3">
                <div className="newsletter__section__1 px-3">
                    <img src="./img/bg/newsletter.png" alt="newsletter" />
                </div>
                <div className="newsletter__section__2 px-2">
                    <h4 className=' fw-bold'>Subscribe to <br/> <span className=' fw-bolder fs-3'>Our Newsletter!</span></h4>
                    <p>Subscribe to our newsletter and stay updated</p>
                </div>
                <div className="newsletter__section__3 px-2">
                    <form action="">
                        <div className="formItem d-flex align-items-center border border-info px-2 py-1 border-2 rounded-1 gap-2 mb-3">
                            <IoMailUnreadOutline  className=' fs-4'/>
                            <input type="text" name='email' className='w-100 bg-transparent' placeholder='Your Email' />
                        </div>
                        <button type='none' className='w-100 py-2 text-white bg-info border-0 rounded-1'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter;