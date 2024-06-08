import React from 'react'
import fl512 from './img/pro-imgs/slat/ss/fl-512.jpg'
import fl802 from './img/pro-imgs/slat/ss/fl-802(1).jpg'
import fl812 from './img/pro-imgs/slat/ss/fl-812.jpg'
import fl822tab from './img/pro-imgs/slat/ss/fl-822-tab.jpg'
import { Helmet } from 'react-helmet';
function Simpleproduct2({image,productname}) {
    return (
        <div className='simpleproducts simpleproduct'>
             <img src={image} alt="" className='prod-img prods-img' />
            <h5 className='prod-name'>{productname}</h5>
        </div>
    )
}

function Sschain() {
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
        <meta name="keywords" content="Conveyors in Chennai,slat chain,pvc belts,Modular belts,Roller Chain,Wire Mesh,Wear Strip,Conveyor Components,Conveyors Spare,in Chennai,Flexline,Conveyors Solutions India PVT LTD,Srinivasa Industries,SS Slat Chains, Stainless Steel Slat Chain, FL-512,FL-802,FL-812,FL-882 Tab,coveyor solutions india pvt. ltd."/>
    </Helmet>
            <div className="header">
                <div className="overlay-slat">
                <h4>SS Slat Chains</h4>
                </div>
            </div>
            <div className="info-slatchain">
                <h4>SS Slat Chain</h4>
                <p>We are a Global supplier of SS slat chains and we offer a wide range of SS/CS slat chains at the best cost with World Class Quality.Superior Quality materials are used in the manufacturing process. These are used in various industries such as Beverages industry, Brewery Industry, Shrimp industry, Bottling Industry, etc.,We are also supplying un-standard Tailor-made size chains globally based on the Quantity*</p>
            </div>
             <div className="types" >
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FSs%20slat%2FFL-512-converted.pdf?alt=media&token=48a19bcc-6c01-4c1c-be82-ecbda650f2d6' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={fl512} productname='FL-512'/></a>
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FSs%20slat%2FFL-802-converted.pdf?alt=media&token=8c1ccb4f-6c60-4e26-ae4e-ab4d87d4ced2' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={fl802} productname='FL-802'/></a>
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FSs%20slat%2FFL-812-N-converted.pdf?alt=media&token=e62c5b3d-11eb-40e1-b87c-a30cb56e4692' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={fl812} productname='FL-812'/></a>
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FSs%20slat%2FFL-882%20TAB-converted.pdf?alt=media&token=a08c7585-5ff9-4396-b838-245578960fa3' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={fl822tab} productname='FL-882 Tab'/></a>
            </div>
        </div>
    )
}

export default Sschain
