import React, { useEffect, useState } from 'react'
import './mslide.css'
import { FiChevronLeft,FiChevronRight } from 'react-icons/fi'
function Mslide({data}) {
    const [info,setinfo] = useState(data);
    const [index,setindex] = useState(0);
      const next=()=>{
    setindex(index+1);
  }
  const prev =()=>{
    setindex(index-1);
  }
  useEffect(()=>{
    if(index<0)
    {
      setindex(info.length -1)
    }
    if(index>info.length-1)
    {
      setindex(0);
    }
  },[index,data]);
//      useEffect(() => {
//     let slider = setInterval(() => {
//       setindex(index + 1);
//     }, 8000);
//     return () => {
//       clearInterval(slider);
//     };
//   }, [index]);
    return (
        <div className='mslide'>
            {info.map((inf,infindex)=>{
                let position = 'nextslide'
                if(infindex === index)
                {
                    position='activeslide'
                }
                if(infindex === index-1 || (index === 0 && infindex === info.length-1))
                {
                    position = 'lastslide'
                }
                return <div key={infindex} className={`slide ${position}`}>
                    <img src={inf} className='img' alt="" />
                </div>
            })}
             <div className="btns">
                <button className='prev' onClick={prev}><FiChevronLeft/></button>
                <button className='next' onClick={next}><FiChevronRight/></button>
            </div>
        </div>
    )
}

export default Mslide
