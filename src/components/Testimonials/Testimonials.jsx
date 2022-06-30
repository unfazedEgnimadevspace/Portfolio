import React from 'react'

import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';

import AVTR4 from '../../assets/avatar4.jpg';


/* Swiper Js imports */
import {  Pagination,  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const reviewData = [
  {
    id: 1,
    img: AVTR1,
    clientReview: 'I thank Daniel for the wonderful job in helping us develop our program. He  was professional, excellent and hard working. Thanks to him, i was able to achieve our goal on time, and we look forward to continue working with him in the future.', 
    clientName: 'Odukoya Temi',
  },
  {
    id: 2,
    img: AVTR2,
    clientReview: 'I will admit - originally the thought of outsourcing scared the hell out of me. As a business owner I am used to control and always having my finger on the pulse of my employees and contractors. Daniel has delivered great results and has convinced me of the value of outsourcing.', 
    clientName: 'Shediran Gray',
  },
  {
    id: 3,
    img: 'https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__340.jpg',
    clientReview: 'I would like to express my satisfaction on the cooperation regarding the development of our web application. Daniel did a very professional job. I was  satisfied with the solution given to us and with the communication flow through the project.', 
    clientName: 'Collins',
  },
  {
    id: 4,
    img: AVTR4,
    clientReview: 'I thank Daniel for the wonderful job in helping us develop our program. He  was professional, excellent and hard working. Thanks to him, i was able to achieve our goal on time, and we look forward to continue working with him in the future.', 
    clientName: 'Sada Zeinab',
  }

]







const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>
        Review from clients
      </h5>
      <h2>
        Testimonials
      </h2>

      <Swiper className='container testimonial__container'
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
     
      
      
      
      
      >
        {reviewData && reviewData.map((data) => {
          return(
            <SwiperSlide className='testimonial' key={data?.id}>
            <div className='client__avatar'>
               <img src={data?.img} alt="Avatar one" />
            </div>
            <h5>
                 {data?.clientName}
               </h5>
               <small className='client__review'>
               {data?.clientReview}
               </small>
           </SwiperSlide>
          )
        })}
      
      </Swiper>
    </section>
  )
}

export default Testimonials