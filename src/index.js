import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import Navbar from "./Navbar";
import {BrowserRouter as Router , Route , Link} from 'react-router-dom'
import { FaFacebookF,FaLinkedin,FaTwitter } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io'
import Home from './components/Home'
import Profile from './components/Profile'
import Products from './components/Products'
import Industriesweserve from './components/Industriesweserve'
import Contactus from './components/Contactus'
import Conveyor from './subcom/Conveyor'
import Modularbelt from './subcom/Modularbelt'
import Pvcbelt from './subcom/Pvcbelt'
import Rollerchain from './subcom/Rollerchain'
import Slatchain from './subcom/Slatchain'
import Wiremesh from './subcom/Wiremesh';
import Sschain from './Sschain';
import Specialchain from './Specialchain'
import Plasticchain from './Plasticchain'
import Multiflex from './Multiflex'
import Conveyorcom from './subcom/Conveyorcom';
import ScrollToTop from './ScrollToTop';
function App(){
  const [loading,setloading] = useState(true);
  const [isdesk,setisdesk] = useState(false);
  const [size,setsize] = useState(window.innerWidth);
  const checksize = () =>{
    setsize(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize',checksize);
    return ()=>{
      window.removeEventListener('resize',checksize);
    }
  })
  useEffect(()=>{
    if(size>1000)
    {
      setisdesk(true);
    }
    else{
      setisdesk(false)
    }
    setloading(false)
  },[size])
  return(
    <>
    {!loading && <Router><ScrollToTop>
      {/* <div className="App"> */}
         <Navbar isdesk={isdesk}/>
      {/* </div> */}
      <Route path='/' exact><Home isdesk={isdesk}/></Route>
      <Route path='/profile'><Profile isdesk={isdesk}/></Route>
      <Route path='/products'><Products/></Route>
      <Route path='/industries'><Industriesweserve/></Route>
      <Route path='/contactus'><Contactus/></Route>
      <Route path='/conveyor'><Conveyor isdesk={isdesk}/></Route>
      <Route path='/modularbelt'><Modularbelt/></Route>
      <Route path='/rollerchain'><Rollerchain/></Route>
      <Route path='/wiremesh'><Wiremesh isdesk={isdesk}/></Route>
      <Route path='/conveyorcom'><Conveyorcom/></Route>
      <Route path='/pvcbelts'><Pvcbelt/></Route>
      <Route path='/slatchain'><Slatchain/></Route>
      <Route path='/sschain'><Sschain/></Route>
      <Route path='/plasticchain'><Plasticchain/></Route>
      <Route path='/multiflex'><Multiflex/></Route>
      <Route path='/specialchain'><Specialchain/></Route> 
      {/* <Route path='/test'><Test img={img} nam='test' text='some text' link='/products'/></Route> */}
    <div>
    <div className="contact-us-home">
      <div className="abt-flexline-con">
        <img src='' className='logo' style={isdesk?{}:{height:'50px'}} alt="" />
        <p>Our goal is to consolidate and increase the global presence of the conveyor solutions , through continuous research and development of innovative and high quality products combined with a professional customer support.</p>
      </div>
      <div className="q-links">
        <h5 className='end-head' style={isdesk?{}:{marginTop:'10px'}}>Quick Links</h5>
        <ul className='end-list'>
          <li><Link  className='end-list-link' to='/'>Home</Link></li>
          <li><Link  className='end-list-link' to='/profile'>Profile</Link></li>
          <li><Link  className='end-list-link' to='/products'>products</Link></li>
          <li><Link  className='end-list-link' to='/industries'>Industries we Serve</Link></li>
          <li><Link  className='end-list-link' to='/contactus'>Contact Us</Link></li>
        </ul>
      </div>
      <div className="end-products">
        <h5 className='end-head'>Products</h5>
        <ul className='end-list'>
          <li><Link className='end-list-link' to='/conveyor'>Conveyors</Link></li>
          <li><Link className='end-list-link' to='/conveyorcom'>Conveyor Components</Link></li>
          <li><Link className='end-list-link' to='/wiremesh'>Wire Mesh & chain chips</Link></li>
          <li><Link className='end-list-link' to='/pvcbelts'>PVC Belts</Link></li>
          <li><Link className='end-list-link' to='/slatchain'>Slat Chains</Link></li>
          <li><a className='end-list-link' rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FFL_WEARSTRIP.pdf?alt=media&token=82956850-036a-4be8-a1f4-1ac74efba038' target='_blank'>Wearstrip </a></li>
          <li><Link className='end-list-link' to='/modularbelt'>Modular Belts</Link></li>
          <li><Link className='end-list-link' to='/rollerchain'>Roller Chain</Link></li>
        </ul>
      </div>
      <div className="findus">
        <h5 className="end-head">Find Us</h5>
        <p style={{margin:0}}>K-22, Ambattur Indl.Estate,</p>
        <p style={{margin:0}}>Chennai, 600058 ,</p>
        <p style={{margin:0}}>Tamilnadu,India</p>
        <p>sales@conveyorsolutionsindia.com</p>
        <p>+91 9841016006<br/>+91 8939916006</p>
        <div className="me-icon">
        <p style={{margin:'0px'}}><a style={{textDecoration:'none'}} target='blank' rel="noreferrer" href='https://www.facebook.com/FLEXLINECHAIN/?ref=page_internal'><FaFacebookF className='media-icon'/></a></p>
        <p style={{margin:'0px'}}><a style={{textDecoration:'none'}} target='blank' rel="noreferrer" href='https://www.instagram.com/flexlinechain/'><IoLogoInstagram className='media-icon'/></a></p>
        <p style={{margin:'0px'}}><a style={{textDecoration:'none'}} target='blank' rel="noreferrer" href='https://twitter.com/FLEXLINECHAIN'><FaTwitter className='media-icon'/></a></p>
        <p style={{margin:'0px'}}><a style={{textDecoration:'none'}} target='blank' rel="noreferrer" href=''><FaLinkedin className='media-icon'/></a></p>
        </div>
      </div>
    </div>
    <div className="copyrights">
      <p>Copyright 2021. Conveyor Solutions India PVT Ltd | Terms of Use </p>
    </div>
    </div>
    </ScrollToTop>
    </Router>}
   </>
  );
    }
ReactDOM.render(<App/>,document.getElementById('root'));