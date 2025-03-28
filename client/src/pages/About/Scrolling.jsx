import React, { useState, useEffect, useRef } from 'react';

const Scrolling = ({ end, duration,title,progress }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const observer = useRef(null);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);
    let current = start;

    const animate = () => {
      current += increment;
      if (current < end) {
        setCount(Math.floor(current));
        setTimeout(animate, 10);
      } else {
        setCount(end);
      }
    };

    const handleScroll = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        animate();
        observer.current.disconnect(); // Stop observing once animation starts
      }
    };

    observer.current = new IntersectionObserver(handleScroll, {
      threshold: 0.2,
    });

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [end, duration]);

  return (
    <>
    { (progress) ?  <div ref={ref} className="flex flex-col gap-2 number">
    <div className='flex justify-between'>
    <p className="text-xl text-black font-semibold flex-1">{title}</p>
    <p className="text-xl text-black-500 font-semibold">{count}%</p>
    </div>
    <input type="range" readOnly name="" id="" value={count} className='custom-range' />
  </div> : <p ref={ref} className='text-4xl font-bold'>{count}</p>
  } 
  </>
  );
};

export default Scrolling;