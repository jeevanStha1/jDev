import React from "react";
import "./project.scss";
import Title from "../title/Title";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="project" id="Projects">
      <div className="container w-75">
        <div className="project__top mb-5">
          <Title
            name={"My Projects"}
            desc={
              "Frontend projects are software development projects that focus on building the user interface and user experience of a website or application. "
            }
          />
        </div>
        <div className="project__data">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="project__data__item  my-0 p-2">
                <div className="project__data__item__left">
                  <div className="top">
                    <h4>Farm Mart: Online Marketplace</h4>
                    <p>
                      
FARM MART: An online platform replacing manual farming systems with digital solutions. It offers tailored advice, connects farmers with consumers, and streamlines processes for improved efficiency and productivity in agriculture. Accessible from mobile or computer.
                    </p>
                  </div>
                  <div className="bottom">
                    <a href={'https://sthajeevan.com.np'} target="_blank"><button>View Live</button></a>
                    <a href={'https://github.com/Jeevan1/FarmManagement'} target="_blank"><button>Source Code</button></a>
                  </div>
                </div>
                <div className="project__data__item__right">
                  <div className="img border">
                    <img src="./img/bg/farm.png" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project__data__item  my-4 p-2">
                <div className="project__data__item__left pe-3">
                  <div className="top">
                    <h4>OneUp: Professional Business Management Dashboard</h4>
                    <p>
                      
OneUp is a user-friendly platform that simplifies business management by consolidating financial information, operational data, and decision-making tools into one intuitive interface. 
                    </p>
                  </div>
                  <div className="bottom">
                    <a href={'https://roaring-empanada-2b388d.netlify.app'} target="_blank"><button>View Live</button></a>
                    <a href={'https://github.com/Jeevan1/oneups'} target="_blank"><button>Source Code</button></a>
                  </div>
                </div>
                <div className="project__data__item__right">
                  <div className="img border">
                    <img src="./img/bg/oneup.png" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project__data__item  my-4 p-2">
                <div className="project__data__item__left pe-3">
                  <div className="top">
                    <h4>GEOSTORE: e-Commerce Platform</h4>
                    <p>
                      GEOSTORE is a dynamic e-commerce platform built using React, offering users a seamless online shopping experience. With a modern and intuitive interface, GEOSTORE allows customers to browse through a wide range of products, add items to their cart, and securely complete transactions. Leveraging React's flexibility and efficiency, GEOSTORE delivers a responsive and engaging shopping environment for both buyers and sellers.
                    </p>
                  </div>
                  <div className="bottom">
                    <a href={'https://2tvz84-5173.csb.app/'} target="_blank"><button>View Live</button></a>
                    <a href={'https://github.com/Jeevan1/geostore'} target="_blank"><button>Source Code</button></a>
                  </div>
                </div>
                <div className="project__data__item__right">
                  <div className="img border">
                    <img src="./img/bg/geostore.png" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Projects;
