import React from 'react'
import Cards from '../components/Cards'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
function Freebook() {
    const filterData=list.filter((data) => data.category==="Free");
    
        var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]
        };

  return (
    <>
    <div className='max-w-screen-2xl conatiner mx-auto  md:px-20 px-4 '>

       

        <h1 className='font-semibold text-xl pb-2'>Free offered course </h1>
        <p>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, distinctio nobis aliquam omnis incidunt consequatur! Commodi ullam officia porro facilis facere assumenda.
        </p>
       
   
    <div>

    <div className="slider-container">
      <Slider {...settings}>
      
      {filterData.map((item)=>(
       <Cards  item = {item} key={item.id}/>
      ))}
      </Slider>
    </div>



    </div>
    </div>

    </>
  );
}

export default Freebook