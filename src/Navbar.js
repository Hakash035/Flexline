import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link,useLocation } from 'react-router-dom'
import { AiOutlineBars } from 'react-icons/ai'
import Slidebar from '../src/Slidebar';
function Navbar({isdesk}) {
    const location = useLocation();
     const [h,seth] = useState({
        home:true,
        prof:false,
        pord:false,
        ind:false,
        con:false
    });
    useEffect(()=>{
        if(location.pathname === '/')
        {
       seth({
          home:true,
          prof:false,
          pord:false,
          ind:false,
          con:false
       })
        }
        else if(location.pathname === '/profile')
        {
         seth({
          home:false,
          prof:true,
          pord:false,
          ind:false,
          con:false
       })   
        }
        else if(location.pathname === '/products')
        {
        seth({
         home:false,
         prof:false,
         pord:true,
         ind:false,
         con:false
       })  
        }
        else if(location.pathname === '/industries')
        {
        seth({
         home:false,
         prof:false,
         pord:false,
         ind:true,
         con:false
       }) 
        }
        else if(location.pathname === '/contactus'){
        seth({
         home:false,
         prof:false,
         pord:false,
         ind:false,
         con:true
       })    
        }
        else{
         seth({
         home:false,
         prof:false,
         pord:false,
         ind:false,
         con:false
       })    
        }
    },[location]);
   const [isopen,setisopen]=useState(false);
   const [isopendd,setisopendd] = useState(false);
   function close(){
       setisopen(false);
   }
   function opensidebar(){
       setisopen(!isopen);
   }
//    function redirect(){
//     console.log('hi');
//     his.push('https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FFL_WEARSTRIP.pdf?alt=media&token=82956850-036a-4be8-a1f4-1ac74efba038');
//    }
 return (
        <div className="nav-bar">
          <div className="logos">
           <img src="" alt="" className='logo' />
            <div className='ver-br'></div>
            <img src="" alt=""  className='logo3'/>
           <img src="" alt=""  className='logo2'/>
           </div>
           {isdesk?<div className="links">
                <Link to='/' className={h.home?'lin activehome':'lin'}>Home</Link>
                <Link to='/profile' className={h.prof?'lin activeprofile':'lin'}>Profile</Link>
                <Link to='/products' onMouseEnter={()=>setisopendd(true)} onMouseLeave={()=>setisopendd(false)} className={h.pord?'lin activeprod pro-lin':'lin pro-lin'}>
                    Products
                     <div onMouseEnter={()=>{return null}} onMouseLeave={()=>{return null}} className={isopendd?'activedrop dropdown':'hiddendrop dropdown'}>
                         <span><Link to='/conveyor' style={{textDecoration:'none',color:'white'}}>Conveyor</Link></span>
                         <span><Link to='/conveyorcom' style={{textDecoration:'none',color:'white'}}>Conveyor Component</Link></span>
                         <span><Link to='/wiremesh'style={{textDecoration:'none',color:'white'}}>Mesh belts</Link></span>
                         <span><Link style={{textDecoration:'none',color:'white'}} to='/modularbelt'>Modular Belts</Link></span>
                         <span><Link  style={{textDecoration:'none',color:'white'}} to='/pvcbelts'>PVC belts</Link></span>
                         <span><Link style={{textDecoration:'none',color:'white'}} to='/slatchain'>Slat chain</Link></span>
                         <span><a style={{textDecoration:'none',color:'white'}} onClick={()=>window.location.href = 'https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FFL_WEARSTRIP.pdf?alt=media&token=82956850-036a-4be8-a1f4-1ac74efba038'} href = 'https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FFL_WEARSTRIP.pdf?alt=media&token=82956850-036a-4be8-a1f4-1ac74efba038' rel="noreferrer" target='_blank'>Wear strips</a></span>
                         <span><Link style={{textDecoration:'none',color:'white'}} to='/rollerchain'>Roller Chain</Link></span>
                     </div>   
                </Link>
                {/* className={true?'activedrop dropdown':'hiddendrop dropdown'} */}
                <Link to='/industries' className={h.ind?'lin activeind':'lin'}>Industries We Serve</Link>
                <Link to='/contactus' className={h.con?'lin activecon':'lin'}>Contact us</Link>
           </div>: <button onClick={opensidebar} className='bars'><AiOutlineBars/></button>
           }
          <Slidebar isopen={isopen} close={close} h={h}/> 
        </div>
    )
}
export default Navbar
