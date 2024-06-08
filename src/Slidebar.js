import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaCaretDown } from 'react-icons/fa'

function Slidebar({isopen,close,h}) {
    const [isopendd,setisopendd] = useState(false);
    const enchanclose=()=>{
        close();
        setisopendd(false)
    }
    return (<div >
            <div className={isopen?'activeslidebar slidebar':'hiddenslidebar slidebar'}>
                <button onClick={close} className='nav-close'><AiOutlineCloseCircle/></button>
                <ul className='nav-list'>
               <li><Link to='/' onClick={close} className={h.home?'lin activehome':'lin'}>Home</Link></li>
               <li><Link to='/profile' onClick={close} className={h.prof?'lin activeprofile':'lin'}>Profile</Link></li>
               <li>
                   <Link to='/products' onClick={close} className={h.pord?'lin activeprod':'lin'}>Products</Link>
                   <div  className={isopendd?'activedrop dropdown':'hiddendrop dropdown'}>
                         <span><Link onClick={enchanclose} to='/conveyor' style={{textDecoration:'none',color:'white'}}>Conveyor</Link></span>
                         <span><Link onClick={enchanclose} to='/conveyorcom' style={{textDecoration:'none',color:'white'}}>Conveyor Components</Link></span>
                         <span><Link onClick={enchanclose} to='/wiremesh'style={{textDecoration:'none',color:'white'}}>Mesh belts</Link></span>
                         <span><Link onClick={enchanclose} style={{textDecoration:'none',color:'white'}} to='/modularbelt'>Modular Belts</Link></span>
                         <span><Link onClick={enchanclose} style={{textDecoration:'none',color:'white'}} to='/pvcbelts'>PVC belts</Link></span>
                         <span><Link onClick={enchanclose} style={{textDecoration:'none',color:'white'}} to='/slatchain'>Slat chain</Link></span>
                         <span><a onClick={enchanclose} style={{textDecoration:'none',color:'white'}} rel="noreferrer"  href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FFL_WEARSTRIP.pdf?alt=media&token=82956850-036a-4be8-a1f4-1ac74efba038' target='_blank'>Wear strips</a></span>
                         <span><Link onClick={enchanclose} style={{textDecoration:'none',color:'white'}} to='/rollerchain'>Roller Chain</Link></span>
                     </div>
                   <button className='caret-btn' onClick={()=>setisopendd(!isopendd)}><FaCaretDown /></button>
                </li>
               <li><Link to='/industries' onClick={close} className={h.ind?'lin activeind':'lin'}>Industries We Serve</Link></li>
               <li><Link to='/contactus' onClick={close} className={h.con?'lin activecon':'lin'}>Contact us</Link></li>
                </ul>
           </div>
           </div>
    )
}

export default Slidebar
