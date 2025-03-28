import React from 'react'
import News from './News'

const NewsContainer = () => {
  const newsData = [
    {
      id: 1,
      src:"blog1.jpg",
      title: 'Ultimate Free Solo Blog Setup With Ghost And Gatsby',
      date: 'September 20, 2023'
    },
    {
      id: 2,
      src:"blog2.jpg",
      title: 'Rethinking Server-Timing As Seen for Critical Monitoring Tool',
      date: 'September 25, 2023'
    },
    {
      id: 3,
      src:"blog3.jpg",
      title: 'Tasks Focus On What Matters Must Focus On What Doesn’t',
      date: 'September 25, 2023'
    }
  ]
  return (

    <div className='hnewsBg w-[100%]  my-16 lg:py-16 flex flex-col md:items-center  gap-5 lg:gap-10'
    style={{
      background: `url(newsBg.png) no-repeat center cover/center`,
    }}>
    <div className="hnews_content flex flex-col gap-12 items-center">
    <p className="lg:w-[30%] text-center px-3 rounded-md font-semibold py-2 text-white bg-[#1136ff] text-xl a-shadow-sm inline-block whitespace-nowrap">
      News & Blogs
    </p>
    <p className="w-[90%] xl:w-[80%] lg:w-full text-center font-bold text-[#000] max-sm:text-2xl sm:text-2xl 2xl:text-4xl leading-loose">
      Get Every Single Update, Article, Recent News & Blogs
    </p>
    </div>
    <div className='w-full flex flex-col justify-center gap-2 max-sm:pl-2 lg:flex-row lg:justify-around items-center'>
    {newsData.map((data,index) => {
        return <News key={index} data={data} />
    })}
    </div>
  </div>
  )
}

export default NewsContainer