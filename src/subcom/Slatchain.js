import React from 'react'
import '../slatchain.css'
import { Helmet } from 'react-helmet';
import plasticchain from '../img/plastic-slat-chain.jpg'
import sschain from '../img/ss-slat-chain.jpg'
import multiflex from '../img/multiflex-chain.jpg'
import spechain from '../img/pro-imgs/slat/spe/fl-1060.jpg'
import { useHistory } from 'react-router-dom'
function Simpleproduct2({image,productname}) {
    return (
        <div className='simpleproducts simpleproduct'>
            {/* <div className='prod-img-div'> */}
             <img src={image} alt="" className='prod-img prods-img' />
            {/* </div> */}
            {/* <button className='read-more'>READ MORE</button>             */}
            <h5 className='prod-name'>{productname}</h5>
        </div>
    )
}
function Slatchain() {
    const his = useHistory();
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
          <meta name="keywords" content="Conveyors in Chennai,slat chain,pvc belts,Modular belts,Roller Chain,Wire Mesh,Wear Strip,Conveyor Components,Conveyors Spare,in Chennai,Flexline,Conveyors Solutions India PVT LTD,Srinivasa Industries,SS Chains, Slat Chains, Plastic Slat Chains,Multiflex Slat Chain,Special Slat Chains,coveyor solutions india pvt. ltd."/>
       </Helmet>
            <div className="header">
                <div className="overlay-slat">
                <h4>Slat Chains</h4>
                </div>
            </div>
            <div className="info-slatchain">
                <h4>Slat Chain</h4>
                <p>We are a leading suppliers of conveyor and conveyor components across the country.we offer a wide range of SS/CS slat chains , modular belts , pvc belts , mesh belts,roller chains at the best cost with premium Quality.Superior Quality materials are used in the manufacturing process. These are used in various industries such as Bottling Industry, food industry , tyre industry  etc.,We are also supplying non-standard Tailor-made size chains globally.</p>
            </div>
            <div className="types">
                <div onClick={()=>his.push('/plasticchain')}><Simpleproduct2 image={plasticchain} productname='Plastic Chain'/></div>
                <div onClick={()=>his.push('/sschain')}><Simpleproduct2 image={sschain} productname='SS Chain'/></div>
                <div onClick={()=>his.push('/multiflex')}><Simpleproduct2 image={multiflex} productname='Multiflex Chain'/></div>
                <div onClick={()=>his.push('/specialchain')} ><Simpleproduct2 image={spechain} productname='Special Chain'/></div>
            </div>
        </div>
    )
}

export default Slatchain