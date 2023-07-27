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
                      Frontend projects are software development projects that
                      focus on building the user interface and user experience
                      of a website or application.
                    </p>
                  </div>
                  <div className="bottom">
                    <button>View Live</button>
                    <button>Source Code</button>
                  </div>
                </div>
                <div className="project__data__item__right">
                  <div className="img">
                    <img src="./img/bg/bg1.jpg" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project__data__item  my-4 p-2">
                <div className="project__data__item__left">
                  <div className="top">
                    <h4>Farm Mart: Online Marketplace</h4>
                    <p>
                      Frontend projects are software development projects that
                      focus on building the user interface and user experience
                      of a website or application.
                    </p>
                  </div>
                  <div className="bottom">
                    <button>View Live</button>
                    <button>Source Code</button>
                  </div>
                </div>
                <div className="project__data__item__right">
                  <div className="img">
                    <img src="./img/bg/bg1.jpg" alt="" />
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
