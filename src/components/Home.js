import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Organization } from "schema-dts";
import { helmetJsonLdProp } from "react-schemaorg";
import { Helmet } from 'react-helmet';
import '../slideshow.css'
import Mindustry from '../Mindustry';
import Simpleproduct from './Simpleproduct.js';
import slide1 from '../img/New sli/1.png';
import slide2 from '../img/New sli/7.jpg';
import slide3 from '../img/New sli/3.jpg'
import slide4 from '../img/New sli/4.jpg'
import slide5 from '../img/New sli/5.jpg'
// import slide6 from '../img/gallery/0.png'
import product1 from '../img/product1.jpg'
import product2 from '../img/product 2.jpg'
import product3 from '../img/modular-belt.jpg'
import product4 from '../img/product4.jpg'
import product5 from '../img/product5.jpg'
import product6 from '../img/product6.jpg'
import industry1 from '../img/Industry1.jpg'
import industry2 from '../img/industry2.jpg'
import industry3 from '../img/tyre.png'
import industry4 from '../img/Automobile.jpg'
import industry5 from '../img/food-beverage.jpg'
import industry6 from '../img/meat-sea.jpg'
import industry7 from '../img/Pharmaceutial.jpg'
import industry8 from '../img/milk.jpg';
import cli1 from '../img/Clientlogo/cli1.png'
import cli2 from '../img/Clientlogo/cli2.jpg'
import cli3 from '../img/Clientlogo/cli3.png'
import cli4 from '../img/Clientlogo/cli4.jpg'
import cli5 from '../img/Clientlogo/cli5.png'
import cli6 from '../img/Clientlogo/cli6.png'
import cli7 from '../img/Clientlogo/cli7.jpeg'
import cli8 from '../img/Clientlogo/cli8.png'
import cli9 from '../img/Clientlogo/cli9.png'
import cli10 from '../img/Clientlogo/cli10.jpg'
import cli11 from '../img/Clientlogo/cli11.png'
import cli12 from '../img/Clientlogo/cli12.jpg'
import cli13 from '../img/Clientlogo/cli13.png'
import cli14 from '../img/Clientlogo/cli14.png'
import cli15 from '../img/Clientlogo/cli15.png'
import cli16 from '../img/Clientlogo/cli16.jpg'
import cli17 from '../img/Clientlogo/cli17.png'
import cli18 from '../img/Clientlogo/cli18.png'
import cli19 from '../img/Clientlogo/cli19.png'
import cli20 from '../img/Clientlogo/cli20.jpg'
import cli21 from '../img/Clientlogo/cli21.jpg'
import cli22 from '../img/Clientlogo/cli22.jpg'
import cli23 from '../img/Clientlogo/cli23.png'
import cli24 from '../img/Clientlogo/cli24.png'

import { FaLightbulb } from 'react-icons/fa'
import {AiFillSafetyCertificate} from 'react-icons/ai'
import { FaGlobeAsia } from 'react-icons/fa'
import {TiSpanner} from 'react-icons/ti'
import {BsFillPeopleFill} from 'react-icons/bs'
import {GiAndromedaChain} from 'react-icons/gi'
function Home({isdesk}) {
  const col = ['red','blue','yellow','green'];
  const col2 =[
    {
    image:slide1,
    text:'LET THE MOVING MOVE FREELY.'
    },
    {
      image:slide2,
      text:'WE ARE ASIA’S FIRST TO HAVE FULLY AUTOMATED LINE FOR METAL CHAIN MANUFACTURING.'
    },
    {
      image:slide3,
      text:'WE PROVIDE ONE STOP SOLUTION FOR YOUR CONVEYORS.'
    },
     {
    image:slide5,
    text:'We have dedicated a technically qualified team of experienced Engineers & Designers for fulfilling the customer’s needs precisely.'
    },
      {
    image:slide4,
    text:'Our goal is to consolidate and increase the global presence of the conveyor solutions , through continuous research and development of innovative and high quality products combined with a professional customer support.'
    }
]
const productsinfo=[
  {
    img1:product1,
    proname1:'conveyor',
    l1:'/conveyor',
    img2:product2,
    proname2:'Wire Mesh & Chip chain',
    l2:'/wiremesh'
  },
  {
    img1:product4,
    proname1:'PVC Belt',
    l1:'/pvcbelts',
    img2:product5,
    proname2:'Slat Chain',
    l2:'/slatchain'
  },
  {
    img1:product6,
    proname1:'Wear Strip',
    l1:'',
    img2:product3,
    proname2:'Modular Belt',
    l2:'/modularbelt'
  }
]
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
 const industries = [
  {
    img1:industry1,
    indname1:'Packing industry',
    info1:'Conveyors are especially useful in applications involving sealing, sachet packaging, carton packaging, stick packaging, pouch packaging and so on. Conveyor systems allow quick and efficient transport for a wide variety of materials, which make them very popular in the material handling and packaging industries.flexline offers several different lines of packaging conveyor systems to accommodate any product your business might have.',
    img2:industry2,
    indname2:'Bottling industry',
    info2:'A bottle conveyor is a type of manufacturing equipment used to transport bottles through a factory or bottling plant. While it shares many features with a standard conveyor belt, the bottle conveyor requires a specialized design to hold the bottles upright and prevent spills. These conveyors are often incorporated into an assembly line system, which includes filling, labeling and packing equipment used to complete the bottling process. Different types of bottle conveyors can be used to move bottles in a variety of sizes and shapes, and some are even adjustable to hold a variety of bottle designs.'
  },
   {
    img1:industry3,
    indname1:'Tyre Industry',
    info1:'flexline produces conveyor systems for mechanical handling of the various components necessary for tire production. Conveyor belts and other types of conveyors allow fast and efficient transport of a wide variety of materials: raw materials, pallets, green tires and finished tires.',
    img2:industry4,
    indname2:'Automobile industry',
    info2:'flexline offers custom designed conveyors for automotive applications. This application requires an efficient assembly process for the various automotive parts handled, and as an automotive industry conveyor systems manufacturer,flexline has the manufactured material handling system for any specific need.'
  },
   {
    img1:industry5,
    indname1:'Food and Beverage Industry',
    info1:'The food industry has been revolutionised by the application of conveyor systems. With the right belting material, food processing (such as cooking, freezing) can be facilitated almost entirely without human intervention.',
    img2:industry6,
    indname2:'Meat and sea Food Industry',
    info2:'We are familiar with every function within a meat processing facility and continually offer new products for food processing conveyor belts to our protein customers that help them with decreased downtime, increased throughputs and ease of operation.'
  },
   {
    img1:industry7,
    indname1:'Pharmaceutical industry',
    info1:'At flexline, we specialize in manufacturing custom conveyors for the pharmaceutical industry. Our engineering team can design a medical conveyor system specifically designed for a customer’s needs.',
    img2:industry8,
    indname2:'Dairy industry',
    info2:'Producing and processing milk and dairy products like cheese or butter is carried out under very sophisticated production conditions and requires specific conveyor belts.Our special conveyor belts for the dairy industry have proved best in many installations when using our plastic modular belts.'
  }
]
const clients=[cli1,cli2,cli3,cli4,cli5,cli6,cli7,cli8,cli9,cli10,cli11,cli12,cli13,cli14,cli15,cli16,cli17,cli18,cli19,cli20,cli21,cli22,cli23,cli24];
  const [info,setinfo] = useState(col2);
  const [index,setindex] = useState(0);
  const [proinfo,setproinfo] = useState(productsinfo);
  const [proind,setproind] = useState(0);
  const [industry,setindustry] = useState(industries);
  const [industryindex,setindustryindex] = useState(0);
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
  },[index,col])
   useEffect(() => {
    let slider = setInterval(() => {
      setindex(index + 1);
    }, 8000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  useEffect(()=>{
    if(proind>productsinfo.length-1)
    {
      setproind(0);
    }
    if(proind<0)
    {
      setproind(productsinfo.length-1)
    }
  },[proind,productsinfo])
   useEffect(() => {
    let slider = setInterval(() => {
      setproind(proind + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [proind]);
 function slide2next(){
   setproind(proind+1);
 }
 function slide2prev(){
   setproind(proind-1);
 }
 useEffect(()=>{
    if(industryindex<0)
    {
      setindustryindex(industry.length -1)
    }
    if(industryindex>industry.length-1)
    {
      setindustryindex(0);
    }
  },[index,col])
 function slide3next(){
   setindustryindex(industryindex+1);
 }
 function slide3prev(){
   setindustryindex(industryindex-1);
 }
return (
  <div>
    <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href="http://ConveyorSolution.com/" />
        <meta
          name="description"
          content="Conveyor solutions can provide its customers with a large range of products: all types of conveyors,ss and plastic chains,modular belts,high temperature belts,pvc belts ,pu belts ,rubber belts,wire mesh belts etc with a maximum amount of customization according to customers needs, in the most convenient location in Chennai"
        />
        <meta name="description" content="We are a leading suppliers of conveyor and conveyor components across the India.we offer a wide range of SS/CS slat chains , modular belts , pvc belts , mesh belts,roller chains at the best cost with premium Quality.Superior Quality materials are used in the manufacturing process."/>
        <meta name="keywords" content="Conveyors in Chennai,slat chain,pvc belts,Modular belts,Roller Chain,Wire Mesh,Wear Strip,Conveyor Components,Conveyors Spare,in Chennai,Flexline,Conveyors Solutions India PVT LTD,Srinivasa Industries"/>
    </Helmet>
    <Helmet
  script={[
    helmetJsonLdProp<Organization>({
 "@context": "https://schema.org",
 "@type": "Organization",
 "name": "Conveyor Solutions India",
 "legalName" : "Conveyor Solutions India PVT LTD",
 "url": "https://conveyorsolutionsindia.com/",
 "founders": [
 {
 "@type": "Person",
 "name": "Srinivasan"
 }],
 "address": {
 "@type": "PostalAddress",
 "streetAddress": "K-22, Ambattur Indl.Estate",
 "addressLocality": "Chennai",
 "addressRegion": "TamilNadu",
 "postalCode": "600058",
 "addressCountry": "India"
 },
 "contactPoint": {
 "@type": "ContactPoint",
 "contactType": "customer support",
 "telephone": "+91 9841016006",
 "telephone": "+91 8939916006",
 "email": "sales@conveyorsolutionsindia.com"
 },
 "sameAs": [ 
 'https://www.facebook.com/FLEXLINECHAIN/?ref=page_internal',
 'https://www.instagram.com/flexlinechain/',
 'https://twitter.com/FLEXLINECHAIN'
 ]
    }),
  ]}
/>
    <div className='main'>
    {
      info.map((co,colindex)=>{
        let position = 'nextslide';
        if(colindex === index)
        {
          position = 'activeslide';
        }
        if(colindex === index -1 || (index === 0 && colindex === info.length-1))
        {
          position='lastslide';
        }
        return <div key={colindex} className={`${position} slide1`} style={{backgroundImage:`url(${co.image})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
          <div className="overlay">
            <p style={{color:'white'}} className='text'>{co.text}</p>
          </div>
        </div>
      })
    }
    <div className="btns">
      <button className='prev' onClick={prev}><FiChevronLeft/></button>
      <button className='next' onClick={next}><FiChevronRight/></button>
    </div>
    </div>
    <div className="profile">
      <h4>Our Profile</h4>
      <div className="in-pro">
      <div className="content">
      <p style={{margin:'0%'}}>Conveyor Solutions India Pvt Ltd. have adopted latest technologies to build the best products & advanced machinery to provide the best service to our clients.</p>
      {/* <ul className='profile-list'>
        <li>
          Work with global leader.
        </li>
        <li>
          Engineering the future.
        </li>
        <li>
          We are engineers for a better tomorrow.
        </li>
      </ul>
      <p>We have a list of valuable clients and look forward to add your distinguished name to our listing to serve you. We assure excellent solutions to your specific requirements supported by timely delivery. We look forward to begin mutually beneficial journey with you and to convert it into a relationship in future.</p> */}
      </div>
      <div className='vid-div'>
        <iframe className='profile-vid' width="560" height="315" src="https://www.youtube.com/embed/pRT03EpJ_Ow" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        {/* <div style={{fontFamily:'"Titillium Web", sans-serif',fontSize:'1.25rem',fontWeight:'bold'}}>Have Query:<br/>044- 26246833 / 9841016006 / 8939916006</div> */}
      </div>
    </div>
    </div>
    <div className="products-section">
    <h4 className='prod-head'>Products</h4>
    <div className='products-list'>
      {proinfo.map((pro,index)=>{
        let pos ='nextslide2'
        if(index === proind){
          pos='activeslide2';
        }
        if(index === proind -1 || (proind === 0 && index === proinfo.length-1))
        {
          pos='lastslide2';
        }
        return <div className={`m-list ${pos}`} key={index}>
           {pro.l1?<Link to={pro.l1} style={{textDecoration:'none'}} ><Simpleproduct image={pro.img1} productname={pro.proname1} /></Link>:<a style={{textDecoration:'none'}} href = 'https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FFL_WEARSTRIP.pdf?alt=media&token=82956850-036a-4be8-a1f4-1ac74efba038' rel="noreferrer" onClick={()=>window.location.href = 'https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FFL_WEARSTRIP.pdf?alt=media&token=82956850-036a-4be8-a1f4-1ac74efba038'} target='_blank'><Simpleproduct image={pro.img1} productname={pro.proname1} /></a>}
           <Link to={pro.l2} style={{textDecoration:'none'}} ><Simpleproduct image={pro.img2} productname={pro.proname2} /></Link>
        </div>
      })}
      <div className="btns">
       <button onClick={slide2prev} style={{zIndex:'100'}} className='prev'><FiChevronLeft/></button>
       <button onClick={slide2next} style={{zIndex:'100'}} className='next'><FiChevronRight/></button>
       </div>
    </div>
    </div>
      <div className="industries-home">
      <h4 className='indus-head'>Industries we Serve</h4>
      <div className="industry-list">
        {/* <Mindustry i1={} i2={} n1='Packing industry' n2='Bottling industry' info1='We use high grade raw materials of metals and artificial fibers for the manufacturing process. Quality is guaranteed with the implementation of stringent parameters and quality checks put throughout formulation and after finish' info2='A bottling company is a commercial enterprise whose output is the bottling of beverages for distribution. Many bottling companies are franchisees of corporations such as Coca-Cola and PepsiCo ' /> */}
        {industry.map((indus,indusindex)=>{
          let pos = 'nextslide3';
          if(indusindex === industryindex)
          {
            pos='activeslide3'
          }
          if(indusindex === industryindex -1 || (industryindex === 0 && indusindex === industry.length-1))
          {
            pos='lastslide3';
          }
          return <div className={`m-indus ${pos}`}>
            <Mindustry i1={indus.img1} i2={indus.img2} n1={indus.indname1} n2={indus.indname2} info1={indus.info1} info2={indus.info2}/>
          </div>
        })}
        <div className="btns">
          <button className='prev p3' style={{zIndex:'100'}} onClick={slide3prev}><FiChevronLeft/></button>
          <button className="next n3" style={{zIndex:'100'}} onClick={slide3next}><FiChevronRight/></button>
        </div>
        </div>
        <Link to='/industries' className='to-abt-us-btn link-indus'>Know More</Link>
    </div>   
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
      <Link to='/profile' className='to-abt-us-btn'>About Us</Link>
    </div>
    <div className="clients-home">
      <h4 className='our-cli-head'>Our Clients</h4>
      <div className="clients">
        {
          clients.map((cli)=>{
            return <img src={cli} className='client-img' alt="" />
          })
        }
      </div>
    </div>
  </div>
)  
}

export default Home;
