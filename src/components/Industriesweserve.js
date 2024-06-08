import React from 'react'
import Mslide from '../Mslide';
import b1 from '../img/industry/bottling/5.jpg'
import b2 from '../img/industry/bottling/2.jpg'
import b3 from '../img/industry/bottling/3.jpg'
import b4 from '../img/industry/bottling/4.jpg'
import p1 from '../img/industry/packing/1.jpg'
import p2 from '../img/industry/packing/2.jpg'
import p3 from '../img/industry/packing/3.jpg'
import p4 from '../img/industry/packing/4.jpg'
import t1 from '../img/industry/tyre/1.jpeg'
import t2 from '../img/industry/tyre/2.jpg'
import t3 from '../img/industry/tyre/3.jpg'
import t4 from '../img/industry/tyre/4.jpg'
import a1 from '../img/industry/automobile/1.jpg'
import a2 from '../img/industry/automobile/2.jpg'
import a3 from '../img/industry/automobile/3.jpg'
import a4 from '../img/industry/automobile/4.jpg'
import f1 from '../img/industry/food/1.jpeg'
import f2 from '../img/industry/food/2.jpg'
import f3 from '../img/industry/food/3.jpg'
import f4 from '../img/industry/food/4.jpg'
import m1 from '../img/industry/meat-seafood/m1.jpg'
import m2 from '../img/industry/meat-seafood/2.jpg'
import m3 from '../img/industry/meat-seafood/3.jpg'
import m4 from '../img/industry/meat-seafood/4.jpg'
import ph1 from '../img/industry/medical/1.jpg'
import ph2 from '../img/industry/medical/2.jpg'
import ph3 from '../img/industry/medical/3.jpg'
import ph4 from '../img/industry/medical/4.jpg'
import d1 from '../img/industry/dairy/1.jpg'
import d2 from '../img/industry/dairy/2.jpg'
import d3 from '../img/industry/dairy/3.jpg'
import d4 from '../img/industry/dairy/4.jpg'
import bg from '../img/aboutus-bg.jpg'
import '../industry.css'
function Industriesweserve() {
    const bottle = [b1,b2,b3,b4];
    const pack = [p1,p2,p3,p4];
    const tyre = [t1,t2,t3,t4];
    const automobile = [a1,a2,a3,a4];
    const food = [f1,f2,f3,f4];
    const meat = [m1,m2,m3,m4];
    const phar = [ph1,ph2,ph3,ph4];
    const dairy = [d1,d2,d3,d4];
    return (
   <div>
    <div style={{backgroundImage:`url(${bg})`}} className="industry-header">
        <h4 className='header-name'>Our Services</h4>
    </div>
    <div className="starter">
        <h4>Our Services</h4>
        <p>We are a leading suppliers of conveyor and conveyor components across the country.we offer a wide range of SS/CS slat chains , modular belts , pvc belts , mesh belts,roller chains at the best cost with premium Quality.Superior Quality materials are used in the manufacturing process. These are used in various industries such as Bottling Industry, food industry , tyre industry  etc.,We are also supplying non-standard Tailor-made size chains globally.</p>
    </div>
     <div className='indus-div' style={{marginTop:'5px'}}>   
      <h4 className='industry-head'>Packing industry</h4>
      <div className="industry">
          <Mslide data={pack} />
          <p>Conveyors are especially useful in applications involving sealing, sachet packaging, carton packaging, stick packaging, pouch packaging and so on. Conveyor systems allow quick and efficient transport for a wide variety of materials, which make them very popular in the material handling and packaging industries.flexline offers several different lines of packaging conveyor systems to accommodate any product your business might have.<br/><br/>flexline conveyors are widely used by packaging companies in a wide range of industries such as the metalworking, material-handling and manufacturing industries along with those connected to other nonconsumable products.</p>
      </div>
     </div>
     <div style={{backgroundColor:'#FFEEDB'}} className='indus-div'>
       <h4 className='industry-head'>Bottling industry</h4>
      <div className="industry">
           <p>A bottle conveyor is a type of manufacturing equipment used to transport bottles through a factory or bottling plant. While it shares many features with a standard conveyor belt, the bottle conveyor requires a specialized design to hold the bottles upright and prevent spills. These conveyors are often incorporated into an assembly line system, which includes filling, labeling and packing equipment used to complete the bottling process. Different types of bottle conveyors can be used to move bottles in a variety of sizes and shapes, and some are even adjustable to hold a variety of bottle designs. A bottle conveyor can be found at facilities that produce beverages and soft drinks, as well as non-potable liquids like chemicals and household cleaners.</p>
          <Mslide data={bottle} />
      </div>
      </div> 
      <div className='indus-div'>
       <h4 className='industry-head'>Tyre Industry</h4>
      <div className="industry">
          <Mslide data={tyre} />
          <p>flexline produces conveyor systems for mechanical handling of the various components necessary for tyre production. Conveyor belts and other types of conveyors allow fast and efficient transport of a wide variety of materials: raw materials, pallets, green tyres and finished tyres. flexline provides the tire industry with various types of conveyor systems, which can be used in all the different stages of the entire production process, taking into account the plant characteristics, the goods to be handled and the specific needs of the manufacturer.</p>
      </div>
      </div> 
      <div className='indus-div' style={{backgroundColor:'#FFEEDB'}}>
       <h4 className='industry-head'>Automobile industry</h4>
      <div className="industry">
          <p>flexline offers custom designed conveyors for automotive applications. This application requires an efficient assembly process for the various automotive parts handled, and as an automotive industry conveyor systems manufacturer,flexline has the manufactured material handling system for any specific need.<br/><br/>Dimensions for these conveyors can be unique based on a customers’ needs. For instance, a carrier, a part of an overhead conveyor system, might be custom designed to accommodate the physical dimensions of the parts that need to be conveyed. Our engineering team can also design a material handling system specific for a particular need</p>
          <Mslide data={automobile} />
      </div>
      </div> 
      <div className='indus-div'>
       <h4 className='industry-head'>Food industry</h4>
      <div className="industry">
          <Mslide data={food} />
          <p>The food industry has been revolutionised by the application of conveyor systems. With the right belting material, food processing (such as cooking, freezing) can be facilitated almost entirely without human intervention.<br/><br/>Take the baking industry, for example. Conveyor belts are able to follow the goods from raw to cooked product through ovens on a single line, cutting production time and increasing throughput.<br/><br/>Choosing the right material in a conveyor system is key in determining its applicable functions.</p>
      </div>
      </div> 
      <div className='indus-div' style={{backgroundColor:'#FFEEDB'}}>
       <h4 className='industry-head'>Meat and Sea food industry</h4>
      <div className="industry">
          <p>We are familiar with every function within a meat processing facility and continually offer new products for food processing conveyor belts to our protein customers that help them with decreased downtime, increased throughputs and ease of operation.<br/><br/>As always,flexline offers service and assistance at any time, even after hours. We are dedicated to servicing the meat and sea food industries by offering quality products at a fair price with product knowledge and service that far surpasses our competition.</p>    
          <Mslide data={meat} />
      </div>
      </div> 
      <div className='indus-div'>
       <h4 className='industry-head'>Pharmaceutical industry</h4>
      <div className="industry">
          <Mslide data={phar} />
          <p>At flexline, we specialize in manufacturing custom conveyors for the pharmaceutical industry. Our engineering team can design a medical conveyor system specifically designed for a customer’s needs.<br/><br/>Pharmaceutical and medical applications have specific requirements for clean rooms and automation integration.  flexline manufactures a variety of pharmaceutical and medical conveyors  that are certified, stainless steel constructed, washdown conveyors designed around the necessity for daily cleaning and sanitization.</p>
      </div>
      </div> 
      <div className='indus-div' style={{backgroundColor:'#FFEEDB'}}>
       <h4 className='industry-head'>Dairy industry</h4>
      <div className="industry">
          <p>Producing and processing milk and dairy products like cheese or butter is carried out under very sophisticated production conditions and requires specific conveyor belts.Our special conveyor belts for the dairy industry have proved best in many installations when using our plastic modular belts.They are placed in brine pools, presses, mould elevating conveyors, and in every conveyor required in the production line, achieving an unrivalled performance.<br/><br/>In all processes in the dairy industry, from coagulating the milk to portioning, filling and packaging the finished products, we can tick all the checkboxes when it’s a question of hygiene and reliable production using the appropriate conveyor belts for milk products.</p>
          <Mslide data={dairy} />
      </div>
      </div> 
        </div>
    )
}

export default Industriesweserve
