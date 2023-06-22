// import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide,useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import cards_data from "./cards_data";

export default function Card() {
  // register();
  return (
    <section className="card-main">
      <div className="card-header">
      <div className="cardheading1">
        <span className="ch1">Best Choices for you</span>
        <br></br>
        <span className="ch2">Popular Residencies</span>
        <br></br>
      </div>
      <div className="r-button"></div>
      </div>

      <section className="displaycard">
        <div className="swiper">
          <Swiper
            slidesPerView={3}
            gridRows={3}
            mousewheel={{ forceToAxis: true }}
          >
          <div className="r-button"><Sliderbuttons /></div>
            {cards_data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="myCard">
                  <div className="card-image">
                    <img src={card.image}></img>
                  </div>
                  <span className="price">${card.price}</span>
                  <div className="card-name ch2">{card.name}</div>
                  <div className="card-info">{card.detail}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </section>
  );
}

const Sliderbuttons =()=> {
  const swiper = useSwiper();
  return(
    <div className="r-buttons">
      <div className="rbtn">
      <button type='button' onClick={()=>swiper.slidePrev()} className='prev'>&lt;</button>
      <button type='button'onClick={()=>swiper.slideNext()} className='forw'>&gt;</button>
    </div>
    </div>
  )

}