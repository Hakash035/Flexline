import React from 'react'
import fl1772 from './img/pro-imgs/slat/spe/fl-1775.jpg'
import fl1060 from './img/pro-imgs/slat/spe/fl-1060.jpg'
import flfinger from './img/pro-imgs/slat/spe/fl-fingerchain.jpg'
import flrt114 from './img/pro-imgs/slat/spe/fl-rt114.jpg'
import { Helmet } from 'react-helmet';
function Simpleproduct2({image,productname}) {
    return (
        <div className='simpleproducts simpleproduct'>
             <img src={image} alt="" className='prod-img prods-img' />
            <h5 className='prod-name'>{productname}</h5>
        </div>
    )
}


function Specialchain() {
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
        <meta name="keywords" content="Conveyors in Chennai,slat chain,pvc belts,Modular belts,Roller Chain,Wire Mesh,Wear Strip,Conveyor Components,Conveyors Spare,in Chennai,Flexline,Conveyors Solutions India PVT LTD,Srinivasa Industries,FL-1080,FL-1775,FL-RT114,FL-Finger Chain,Special Slat Chain,coveyor solutions india pvt. ltd."/>
    </Helmet>
            <div className="header">
                <div className="overlay-slat">
                <h4>Special Slat Chains</h4>
                </div>
            </div>
            <div className="info-slatchain">
                <h4>Special Slat Chain</h4>
                <p>We are a Global supplier of SS slat chains and we offer a wide range of SS/CS slat chains at the best cost with World Class Quality.Superior Quality materials are used in the manufacturing process. These are used in various industries such as Beverages industry, Brewery Industry, Shrimp industry, Bottling Industry, etc.,We are also supplying un-standard Tailor-made size chains globally based on the Quantity*</p>
            </div>
             <div className="types" >
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FSpecial%20slat%2FFL-1060-converted.pdf?alt=media&token=1431fea7-0dfc-48b4-9dd4-37d7690b2d88' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={fl1060} productname='FL-1060'/></a>
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FSpecial%20slat%2FFL-1775-converted.pdf?alt=media&token=3ba2baa8-c806-4e45-bbef-ce7a9a524b7f' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={fl1772} productname='FL-1775'/></a>
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FSpecial%20slat%2FFL-RT114-converted.pdf?alt=media&token=3160f1a4-c3d6-4ebc-a621-f97e7210bcd9' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={flrt114} productname='FL-RT114'/></a>
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FSpecial%20slat%2FFL-FINGER%20CHAIN-converted.pdf?alt=media&token=6128999f-7ae9-4127-81f6-1e6b9caac90d' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={flfinger} productname='FL-Finger Chain'/></a>
            </div>
        </div>
    )
}

export default Specialchain
