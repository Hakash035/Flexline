import React from 'react'
import fl820 from './img/pro-imgs/slat/plastic/fl-820.jpg'
import fl821 from './img/pro-imgs/slat/plastic/fl-821.jpg'
import fl880tab from './img/pro-imgs/slat/plastic/fl-880-tab.jpg'
import fl880mag from './img/pro-imgs/slat/plastic/fl-880-mag.jpg'
import fl882 from './img/pro-imgs/slat/plastic/fl-882-tab.jpg'
import { Helmet } from 'react-helmet';
function Simpleproduct2({image,productname}) {
    return (
        <div className='simpleproducts simpleproduct'>
             <img src={image} alt="" className='prod-img prods-img' />
            <h5 className='prod-name'>{productname}</h5>
        </div>
    )
}

function Plasticchain() {
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
        <meta name="keywords" content="Conveyors in Chennai,slat chain,pvc belts,Modular belts,Roller Chain,Wire Mesh,Wear Strip,Conveyor Components,Conveyors Spare,in Chennai,Flexline,Conveyors Solutions India PVT LTD,Srinivasa Industries,FL-821,FL-820 Series,FL-880 Tab,FL-880 Magnetic,FL-882 Tab,Plastic Slat Chain,coveyor solutions india pvt. ltd."/>
    </Helmet>
             <div className="header">
                <div className="overlay-slat">
                <h4>Plactic Slat Chains</h4>
                </div>
            </div>
            <div className="info-slatchain">
                <h4>Plastic Slat Chain</h4>
                <p>We are a Global supplier of SS slat chains and we offer a wide range of SS/CS slat chains at the best cost with World Class Quality.Superior Quality materials are used in the manufacturing process. These are used in various industries such as Beverages industry, Brewery Industry, Shrimp industry, Bottling Industry, etc.,We are also supplying un-standard Tailor-made size chains globally based on the Quantity*</p>
            </div>
             <div className="types" style={{maxWidth:'70%',margin:'0px auto'}}>
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FPlastic%20slat%2FFL-821-converted.pdf?alt=media&token=89aafc19-6b44-42fd-9b1a-65330cf53769' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={fl821} productname='FL-821'/></a>
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FPlastic%20slat%2FFL-820%20SERIES-converted.pdf?alt=media&token=bb9de8ef-5686-4ab7-a9b5-bee1160607f1' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={fl820} productname='FL-820 Series'/></a>
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FPlastic%20slat%2FFL-880%20TAB-converted.pdf?alt=media&token=fd63cdf4-fabd-4107-ba31-be6463e08f41' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={fl880tab} productname='FL-880 Tab'/></a>
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FPlastic%20slat%2FFL-880%20MAGNETIC-converted.pdf?alt=media&token=fbcb001e-52f4-4c1d-8fa2-d20997900064' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={fl880mag} productname='FL-880 Magnetic'/></a>
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FPlastic%20slat%2FFL-882%20TAB-converted.pdf?alt=media&token=bbe82372-1c59-43b9-8e8b-fb359936f8be' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={fl882} productname='FL-882 Tab'/></a>
            </div>
        </div>
    )
}

export default Plasticchain
