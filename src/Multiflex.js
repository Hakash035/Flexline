import React from 'react'
import fl1702 from './img/pro-imgs/slat/multiflex/fl-1702.jpg'
import flcc600 from './img/pro-imgs/slat/multiflex/fl-cc600.jpg'
import flcc1400 from './img/pro-imgs/slat/multiflex/fl-cc1400.jpg'
import { Helmet } from 'react-helmet';
function Simpleproduct2({image,productname}) {
    return (
        <div className='simpleproducts simpleproduct'>
             <img src={image} alt="" className='prod-img prods-img' />
            <h5 className='prod-name'>{productname}</h5>
        </div>
    )
}

function Multiflex() {
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
        <meta name="keywords" content="Conveyors in Chennai,slat chain,pvc belts,Modular belts,Roller Chain,Wire Mesh,Wear Strip,Conveyor Components,Conveyors Spare,in Chennai,Flexline,Conveyors Solutions India PVT LTD,Srinivasa Industries,FL-1702,FL-CC-1400,FL-CC-600,Multiflex Slat Chain,coveyor solutions india pvt. ltd."/>
    </Helmet>
             <div className="header">
                <div className="overlay-slat">
                <h4>Multiflex Slat Chains</h4>
                </div>
            </div>
            <div className="info-slatchain">
                <h4>Multiflex Slat Chain</h4>
                <p>We are a Global supplier of SS slat chains and we offer a wide range of SS/CS slat chains at the best cost with World Class Quality.Superior Quality materials are used in the manufacturing process. These are used in various industries such as Beverages industry, Brewery Industry, Shrimp industry, Bottling Industry, etc.,We are also supplying un-standard Tailor-made size chains globally based on the Quantity*</p>
            </div>
             <div className="types" >
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FMultiflex%2FFL-1702-converted.pdf?alt=media&token=f7a857af-38a8-41c7-a3f1-12b7d7bdd018' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={fl1702} productname='FL-1702'/></a>
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FMultiflex%2FFL-CC%201400-converted.pdf?alt=media&token=094cc97d-96a9-416e-b502-d649bdde3058' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={flcc1400} productname='FL-CC 1400'/></a>
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FMultiflex%2FFL-CC%20600-converted.pdf?alt=media&token=72b2e4dc-d3e3-46a8-bd4f-5b288ed6f74c' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={flcc600} productname='FL-CC 600'/></a>
            </div>
        </div>
    )
}

export default Multiflex
