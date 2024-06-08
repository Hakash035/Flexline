import React, { useEffect, useState } from 'react'
import product1 from '../img/product1.jpg'
import product2 from '../img/product 2.jpg'
import product3 from '../img/modular-belt.jpg'
import product4 from '../img/product4.jpg'
import product5 from '../img/product5.jpg'
import product6 from '../img/product6.jpg'
import product7 from '../img/rollerchain-pro.jpg'
import product8 from '../img/conveyor-component-pro.jpg'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import '../products.css'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Products() {
    const images = [
        {
            name:'conveyor',
            imga:product1,
            text:'some text about conveyor',
            link:'/conveyor'
        },
        {
            name:'Wire Mesh & Chip chain',
            imga:product2,
            text:'some text about Wire meah & Chip chain',
            link:'/wiremesh'
        },
        {
            name:'PVC Belt',
            imga:product4,
            text:'some text about PVC Belt',
            link:'/pvcbelts'
        },
        {
            name:'Slat Chain',
            imga:product5,
            text:'some text about Slat chains',
            link:'/slatchain'
        },
        {
            name:'Wear Strip',
            imga:product6,
            text:'some text about Wear Strip',
            link:''
        },
        {
            name:'Roller chain',
            imga:product7,
            text:'some text about Roller chain',
            link:'/rollerchain'
        },
        {
            name:'Modular Belt',
            imga:product3,
            text:'some text about Modular Belt',
            link:'/modularbelt'
        },
        {
          name:'Conveyor Components',
          imga:product8,
          text:'some text about Conveyor Components',
          link:'/conveyorcom'
        }
    ];
    const [img,setimg] = useState(images);
    const [index,setindex] = useState(0);
    //start

    //end
     useEffect(()=>{
    if(index<0)
    {
      setindex(img.length -1)
    }
    if(index>img.length-1)
    {
      setindex(0);
    }
  },[index])
     useEffect(() => {
    let slider = setInterval(() => {
      setindex(index + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
        return (
      <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Conveyor solutions can provide its customers with a large range of products: all types of conveyors,ss and plastic chains,modular belts,high temperature belts,pvc belts ,pu belts ,rubber belts,wire mesh belts etc with a maximum amount of customization according to customers needs, in the most convenient location in Chennai"
        />
        <meta name="description" content="We are a leading suppliers of conveyor and conveyor components across the India.we offer a wide range of SS/CS slat chains , modular belts , pvc belts , mesh belts,roller chains at the best cost with premium Quality.Superior Quality materials are used in the manufacturing process."/>
        <meta name="keywords" content="Conveyors in Chennai,slat chain,pvc belts,Modular belts,Roller Chain,Wire Mesh,Wear Strip,Conveyor Components,Conveyors Spare,in Chennai,Flexline,Conveyors Solutions India PVT LTD,Srinivasa Industries,coveyor solutions india pvt. ltd."/>
      </Helmet>
        <div className='p-head-s'>
          <h4 className='pro-head'>Products</h4>
             <div className='p-head-slides'>
            {img.map((im,imindex)=>{
                let position = 'pnextslide';
                let pos = '';
                if(imindex === 0 && index === img.length-1)
                {
                    pos = 'verynextslide'
                }
                if(imindex === index)
                {
                    position = 'pactiveslide';
                }
                if(imindex === index-1  || (index === 0 && imindex === img.length-1))
                {
                    position='plastslide';
                }
                if(imindex === index+1 )
                {
                    position='verynextslide'
                }
              //  if(position === 'pactiveslide')
              //   {
              //      return <div key={imindex} className={`product ${position} ${pos}`}>
              //               <div className='flip-card' onClick={()=>setisflip(!isflip)} >
              //                   <div className={isflip?'flip-card-inner':'flip-act flip-card-inner'}>
              //                       <div className="flip-card-front">
              //                           <img src={im.imga} alt="" className='pro-img' />
              //                           <div><p>{im.name}</p></div>
              //                       </div>
              //                       <div className="flip-card-back">
              //                           <p>{im.text}</p>
              //                           {/* <Link className='link-pro' to={im.link}>Know More</Link> */}
              //                           {linkdet(im.name,im.link)}
              //                       </div>
              //                   </div>
              //               </div>
              //             </div>
              //   }
              //start
              if(position === 'pactiveslide'){
                return <div key={imindex} className={`product ${position} ${pos}`}>
                    {im.link?<Link to={im.link} style={{textDecoration:'none'}}>
                      <div className='inner-nona'>
                          <img src={im.imga} alt="" className='pro-img' />
                          <p>{im.name}</p>
                      </div>
                    </Link>:
                    <a style={{textDecoration:'none'}} rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FFL_WEARSTRIP.pdf?alt=media&token=82956850-036a-4be8-a1f4-1ac74efba038' target='_blank'>
                       <div className='inner-nona'>
                          <img src={im.imga} alt="" className='pro-img' />
                          <p>{im.name}</p>
                      </div>
                    </a>}
                </div>}
                //end
                // if(position === 'pactiveslide'){
                //   return <div key={imindex} className={`product ${position} ${pos}`}>
                //   <Test img={im.imga} link={im.link} nam={im.name} text={im.text} />
                //   </div>
                // }
               return <div key={imindex} className={`product ${position} ${pos}`}>
                <div className='inner-nona'>
                          <img src={im.imga} alt="" className='pro-img' />
                          <p>{im.name}</p>
                      </div>
                    </div>
            })}
        <div className="btns pbtns">
            <button className='prev pprev' onClick={()=>setindex(index-1)}><FiChevronLeft/></button>
            <button className='next pnext' onClick={()=>setindex(index+1)}><FiChevronRight/></button>
        </div>
        </div>
        </div>
      </div>  
    )
}

export default Products
