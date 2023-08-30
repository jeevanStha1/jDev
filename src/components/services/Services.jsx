import React from "react";
import "./services.scss";
import Title from "../title/Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { services } from "../../data";

function Services() {
  return (
    <div className="services bg-light" id="Services">
      <div className="container w-75">
        <div className="heading pb">
          <Title
            name={"Services"}
            desc={<h1 className=" text-black fw-bold">What We Do?</h1>}
          />
        </div>
        <div className="services__section">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {services.map((item,idx) => (
                <SwiperSlide>
                    <div className="services__section__item text-center bg-white p-3  my-5  d-flex flex-column gap-2 align-items-center border" key={idx}>
                        <span className=" text-info">{item.icon}</span>
                        <p className="title fs-5 fw-bold">{item.title}</p>
                        <p className="desc fw-medium">{item.desc}</p>
                        <button className=" text-info">- Discuss Now -</button>
                    </div>
                </SwiperSlide>

            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Services;
