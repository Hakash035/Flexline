import React, { useEffect, useState } from 'react'
import { GrLocation } from 'react-icons/gr'
import { AiOutlineMail } from 'react-icons/ai'
import { FaPhoneAlt } from 'react-icons/fa'
import '../contactus.css'
// import headimg from '../img/contact-us.png'
import bg from '../img/aboutus-bg.jpg'
import { db } from '../firebase'
function Contactus() { 
const [loading,setloading] = useState(false);
const [msg,setmsg] = useState('');
const [data,setdata] = useState({
    name:'',
    email:'',
    phone:'',
    partnumber:'',
    query:''
})
useEffect(()=>{
  if(msg)
  {
    let clear = setInterval(()=>{
      setmsg('');
    },5000)
    return ()=>{
    clearInterval(clear);
    }
  }
})
async function putquery(){
    console.log('clicked');
    setloading(true)
    await db.collection('enquiry').add({
          name:data.name,
          email:data.email,
          phone:data.phone,
          partnumber:data.partnumber,
          query:data.query
     })
    setmsg('Response Recorded');
    setdata({
        name:'',
        email:'',
        phone:'',
        partnumber:'',
        query:''
    })
    setloading(false);
}
const isdis=()=>{
    if(data.name && data.email && data.phone && data.partnumber && data.query && !loading)
    {   console.log('idk');
        return false
    }
    else{
        console.log('idk2');
        return true
    }
}
    return (
        <div>
        {/* <div className="head-contact-us" style={{backgroundImage:`url(${headimg})`}}>
            <h5>Enquiry</h5>
            <h6>Let us give you more details about products you want us. Please fill out the form below.<br/>We have million of products!</h6>
        </div> */}
    <div style={{backgroundImage:`url(${bg})`}} className="industry-header">
        <h4 className='header-name'>Contact Us</h4>
    </div>
        <div className="contact-us-main">
            <div className="en-form">
                <h6>Your Queries</h6>
                <input type="text" placeholder='Name' onChange={(e)=>setdata({ name:e.target.value,email:data.email,phone:data.phone,partnumber:data.partnumber,query:data.query})} value={data.name}/>
                <input type="email" placeholder='Email' onChange={(e)=>setdata({ name:data.name,email:e.target.value,phone:data.phone,partnumber:data.partnumber,query:data.query})} value={data.email}/>
                <input type="phone" placeholder='Phone' onChange={(e)=>setdata({ name:data.name,email:data.email,phone:e.target.value,partnumber:data.partnumber,query:data.query})} value={data.phone} />
                <input type="text" placeholder='Part Number' onChange={(e)=>setdata({ name:data.name,email:data.email,phone:data.phone,partnumber:e.target.value,query:data.query})} value={data.partnumber} />
                <textarea name="" id="" placeholder='Query' onChange={(e)=>setdata({ name:data.name,email:data.email,phone:data.phone,partnumber:data.partnumber,query:e.target.value})} value={data.query}></textarea>
                <div className="btn-msg">
                <button disabled={isdis()} className='sub-btn' onClick={putquery}>Submit</button>
                {msg && <span className='msg-rec'>{msg}</span>}
                </div>
            </div>
            <div className="ver-bar"></div>
            <div className="Find-us">
                <h5>Find Us</h5>
                <div className="office">
                    <GrLocation className='icon-con'/>
                    <h6>Head Office</h6>
                    <p>K-22, Ambattur Indl.Estate,Chennai, 600058 ,Tamilnadu,India</p>
                </div>        
                <div className="email">
                    <AiOutlineMail className='icon-con'/>
                    <h6>Email Us</h6>
                    <p>sales@conveyorsolutionsindia.com</p>
                </div> 
                <div className="phone">
                    <FaPhoneAlt className='icon-con'/>
                    <h6>Call Us</h6>     
                    <p>+91 9841016006 / +91 8939916006</p>
                </div>       
            </div>
        </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15544.522973184201!2d80.1724391!3d13.0908994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72bb05b87375fa5b!2sCONVEYOR%20SOLUTIONS%20INDIA%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1623914944679!5m2!1sen!2sin" width="600" height="450" style={{border:'none'}} className='map' allowFullScreen="" loading="lazy" title='location'></iframe>
        </div>
    )
}

export default Contactus
