import React from "react";
import Slider from "react-slick";
import Project from "../Home/Projects/Project";
import Testimonial from "../Home/Testimonial/Testimonial";
import ClientCard from "../../pages/Client/ClientCard";

function SlickSlider({project,projectData,test,testData,client,clientsData}) {

  const projects = {
    dots: true,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  const tests = {
    dots: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const clients = {
    dots: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
      {(project) && <Slider {...projects} className="w-[90vw]  h-full flex gap-2">
      {
        projectData.map((item,index)=>{
          return <Project key={index} src={item.src} title={item.title} />})}
      </Slider>
    }
      {(test) && <Slider {...tests} className="w-[85vw] mx-auto flex lg:w-[45vw] bg-transparent h-full gap-8 my-5">
        {testData.map((item,index)=>{
          return <Testimonial key={index} title={item.title} description={item.description} name={item.name} company={item.company} image={item.image} /> })}
      </Slider>}

      {(client) && <Slider {...clients} className="w-[80vw] bg-transparent h-full my-5 flex"> {clientsData.map((client)=>{
          return <ClientCard key={client.id} name={client.name} logo={client.logo}/>
        })}
        </Slider>
        }
  </>
  );
}

export default SlickSlider;
