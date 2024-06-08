import React, { useState,useEffect } from 'react'
import bg from '../img/aboutus-bg.jpg'
import '../profile.css';
import { FiChevronLeft,FiChevronRight } from 'react-icons/fi'
import Gallery from "react-photo-gallery";
import slide1 from '../img/gallery/0.png';
import slide2 from '../img/gallery/1.png';
import slide3 from '../img/gallery/2.png'
import slide4 from '../img/gallery/3.png'
import slide5 from '../img/gallery/4.png'
import slide6 from '../img/gallery/5.png'
import slide7 from '../img/gallery/6.png'
import slide8 from '../img/gallery/7.png'
import slide9 from '../img/gallery/8.png'
import slide10 from '../img/gallery/10.jpg'
import slide12 from '../img/gallery/11.jpg';
import slide13 from '../img/gallery/12.jpg'
import slide14 from '../img/gallery/13.jpg'
import slide15 from '../img/gallery/14.jpg'
import slide16 from '../img/gallery/15.jpg'
import slide17 from '../img/gallery/16.jpg'
import slide18 from '../img/gallery/17.jpg'
import slide19 from '../img/gallery/18.jpg'
import slide20 from '../img/gallery/19.jpg'
import slide21 from '../img/gallery/20.jpg'
import slide22 from '../img/gallery/21.jpg'
import slide23 from '../img/gallery/25.jpg'
import slide24 from '../img/gallery/26.jpg'
import slide25 from '../img/gallery/27.jpg'
import slide26 from '../img/gallery/28.jpg'
import slide27 from '../img/gallery/29.jpg'
import slide11 from '../img/gallery/30.jpg'
import slide28 from '../img/gallery/31.jpg'
import slide29 from '../img/gallery/32.jpg'
import slide30 from '../img/gallery/33.jpg'
import slide31 from '../img/gallery/34.jpg'
import slide32 from '../img/gallery/35.jpg'
import slide33 from '../img/gallery/36.jpg'
import slide34 from '../img/gallery/37.jpg'
import slide35 from '../img/gallery/38.jpg'
import slide36 from '../img/gallery/39.jpg'
import something from '../img/gallery/0.png'
import { FaLightbulb } from 'react-icons/fa'
import {AiFillSafetyCertificate} from 'react-icons/ai'
import { FaGlobeAsia } from 'react-icons/fa'
import {TiSpanner} from 'react-icons/ti'
import {BsFillPeopleFill} from 'react-icons/bs'
import {GiAndromedaChain} from 'react-icons/gi'
function Profile({isdesk}) {

  const photos = [
  {
    src: slide1,
    width: 3,
    height: 4
  },
  {
    src: slide2,
    width: 3,
    height: 4
  },
  {
    src: slide3,
    width: 3,
    height: 4
  },
  {
    src: slide24,
    width: 4,
    height: 3
  },
    {
    src: slide25,
    width: 4,
    height: 2.5
  },
  {
    src: slide26,
    width: 3,
    height: 3
  },
  {
    src: slide27,
    width: 4,
    height: 3
  },
  {
    src: slide7,
    width: 4,
    height: 3
  },
  {
    src: slide8,
    width: 4,
    height: 1
  },
    {
    src: slide9,
    width: 3,
    height: 4
  },
  {
    src: slide10,
    width: 3,
    height: 4
  },
  {
    src: slide30,
    width: 1,
    height: 1,
  },
  {
    src: slide11,
    width: 4,
    height: 3
  },
  {
    src: slide12,
    width: 3,
    height: 3
  },
  {
    src: slide13,
    width: 4,
    height: 3
  },
  {
    src: slide14,
    width: 3,
    height: 3
  },
  {
    src: slide15,
    width: 4,
    height: 3
  },
  {
    src: slide31,
    width: 1,
    height: 1,
  },
  {
    src: slide16,
    width: 4,
    height: 3
  },
  {
    src: slide17,
    width: 4,
    height: 2.5
  },
  {
    src: slide18,
    width: 3,
    height: 3
  },
  {
    src: slide36,
    width: 1,
    height: 1,
  },
  {
    src: slide19,
    width: 4,
    height: 3
  },
   {
    src: slide4,
    width: 3,
    height: 3
  },
  {
    src: slide5,
    width: 3,
    height: 4
  },
  {
    src: slide28,
    width: 4,
    height: 3
  },
    {
    src: slide29,
    width: 4,
    height: 3
  },
  {
    src: slide6,
    width: 3,
    height: 3
  },
  {
    src: slide32,
    width: 1,
    height: 1,
  },
  {
    src: slide20,
    width: 4,
    height: 3
  },
    {
    src: slide21,
    width: 4,
    height: 3
  },
  {
    src: slide22,
    width: 3,
    height: 3
  },
  {
    src: slide23,
    width: 4,
    height: 3
  },
  {
    src: slide33,
    width: 1,
    height: 1,
  },
  {
    src: slide34,
    width: 1,
    height: 1,
  },
  {
    src: slide35,
    width: 1,
    height: 1,
  },
];

 const aboutus = [
  {
    icon:<FaLightbulb className='ic'/>,
    point:'ONE STOP SOLUTIONS FOR CONVEYORS'
  },
   {
    icon:<FaGlobeAsia  className='ic'/>,
    point:'ASIA’S 1ST FULLY AUTOMATED PLANT FOR METAL CHAINS'
  },
   {
    icon:<BsFillPeopleFill  className='ic'/>,
    point:'2500+ SATISFIED CUSTOMERS'
  },
   {
    icon:<TiSpanner style={{color:'white'}}  className='ic'/>,
    point:'HIGHLY SKILLED ENGINEERS '
  },
   {
    icon:<AiFillSafetyCertificate  className='ic'/>,
    point:'ISO:9001: 2015 certified company'
  },
   {
    icon:<GiAndromedaChain  className='ic' />,
    point:'More than 1000 varieties of chains and components UNDER ONE ROOF'
  }
]  
const infraimg=[slide1,slide2,slide3,slide4,slide5,slide6,slide7,slide8,slide10,slide9];
const [inimg,setinimg] = useState(infraimg);
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
      setindex(inimg.length -1)
    }
    if(index>inimg.length-1)
    {
      setindex(0);
    }
  },[index,infraimg])
     useEffect(() => {
    let slider = setInterval(() => {
      setindex(index + 1);
    }, 4000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
    return (
        <div>
    <div style={{backgroundImage:`url(${bg})`}} className="industry-header">
        <h4 className='header-name'>Profile</h4>
    </div>
        <div className="profile">
      <h4>About Us</h4>
      <div className="abt-us-top-section">
          <img src={something} alt="" className='top-section-img' />
          <p className='abt-us-top-para'>conveyor solutions INDIA PVT LTD    have adopted latest technologies to build the best products & advanced machinery to provide the best service to our clients.<br/>
We will continue on this path, leveraging on our core competencies, which are: being easy and pleasant to do business with, the ability to find the best solutions for our partners, our quick reaction times and our flexibility to adapt to a changing environment and our customers’ requirements.
Our goal is to consolidate and increase the global presence of the conveyor solutions , through continuous research and development of innovative and high quality products combined with a professional customer support.</p>
       </div>   
      <div className="in-pro">
      <div className="content">
       {/* <span style={{margin:'0%'}}>Since the inception in 1997, We have adopted latest technology, to build state-of-the-art facility, with all Infrastructure & advanced machinery to provide the best of service to our clients.</span> */}
      <span>We have dedicated a technically qualified team of experienced Engineers & Designers for fulfilling the customer’s needs precisely. We have developed an expertise to provide a wide range of Conveyor chains and its components for diversified industry segments like Automobile,tyre,food and beverage,bottling , packaging and pharmaceutical industries .
        <br /><br />Conveyor solutions  can provide its customers with a large range of products: all types of conveyors,ss and plastic chains,modular belts,high temperature belts,pvc belts ,pu belts ,rubber belts,wire mesh belts etc with a maximum amount of customization according to customers needs.
      </span>
      </div>
      <div className='vid-div'>
        <iframe className='profile-vid' width="560" height="315" src="https://www.youtube.com/embed/pRT03EpJ_Ow" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        {/* <div style={{fontFamily:'"Titillium Web", sans-serif',fontSize:'1.25rem',fontWeight:'bold'}}>Have Query:<br/>044- 26246833 / 9841016006 / 8939916006</div> */}
      </div>
    </div>
    </div>
        {!isdesk?<div className="infra-gal">
             <h4>Gallery</h4>
             {/* <p>We have a dedicated and technically qualified team of experienced Engineers & Designers for fulfilling the customer’s needs precisely. We have developed an expertise to provide a wide range of Conveyor chains and its components for diversified industry segments like Sugar, Cement, Automobile, Bakeries, Breweries, Chemical & Fertilizers, Bottling, Food Processing, Agriculture and Allied Industries.</p> */}
             <div className="g-slide">
                {inimg.map((img,inindex)=>{
                    let position = 'nextimg';
                    if(inindex === index)
                    {
                        position='activeimg';
                    }
                    if(inindex === index -1 || (index === 0 && inindex === inimg.length-1)){
                        position='lastimg';
                    }
                    return <div className={`slide-img-div ${position}`}>
                             <img src={img} alt="" className='slide-img' />
                           </div>
                })}
                <div className="btns">
                    <button className='prev' style={{backgroundColor:'rgba(238, 49, 36, 0.8)'}} onClick={prev}><FiChevronLeft/></button>
                    <button className='next' style={{backgroundColor:'rgba(238, 49, 36, 0.8)'}} onClick={next}><FiChevronRight/></button>
                </div>
             </div>
         </div>  :  
        <div className="gal">
          <h4>Gallery</h4>
        <Gallery photos={photos} direction={"column"} />;
        </div>}
     <div className="why-flexline">
      <h4 className='head-why-flexline'>Why Flexline</h4>
      <div className="about-us">
        {aboutus.map((ab,abindex)=>{
          return <div className="sin-ab" key={abindex}>
            <h5 className='points-icon'>{ab.icon}</h5>
            <h4 className='points'>{ab.point}</h4>
          </div>
        })}
      </div>
      {/* <Link to='/profile' className='to-abt-us-btn'>About Us</Link> */}
    </div>
  
        </div>
    )
}

export default Profile
