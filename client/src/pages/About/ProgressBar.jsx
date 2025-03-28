import React from 'react'
import Scrolling from './Scrolling'

const ProgressBar = () => {

    const data = [
        {
            title: "Research",
            end: "89",
            dur: "2000",
        },
        {
            title: "Development",
            end: "93",
            dur: "2000",
        },
        {
            title: "SEO Optimization",
            end: "78",
            dur: "2000",
        }
    ]
    return (
        <>
            <div>
                <div className="max-w-4xl mx-auto mt-6">
                    <div className="flex flex-col gap-5 mb-6">                      
                        {data.map((item,index)=>{
                            return <Scrolling key={index} end={item.end} duration={item.dur} title={item.title} progress={true}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressBar