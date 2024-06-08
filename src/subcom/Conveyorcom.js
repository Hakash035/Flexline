import React from 'react'
import '../conveyorcom.css'
import basesupp from '../img/conveyorcom-basesupport.jpg'
import brackets from '../img/conveyorcom-brackets.jpg'
import returnroll from '../img/conveyor-return-roller.jpg'
import corner from '../img/corner-track-2.png'
import { Helmet } from 'react-helmet';

function Simpleproduct2({image,productname}) {
    return (
        <div className='simpleproducts simpleproduct'>
             <img src={image} alt="" className='prod-img prods-img' />
            <h5 className='prod-name'>{productname}</h5>
        </div>
    )
}

function Conveyorcom() {
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
          <meta name="keywords" content="Conveyors in Chennai,slat chain,pvc belts,Modular belts,Roller Chain,Wire Mesh,Wear Strip,Conveyor Components,Conveyors Spare,in Chennai,Flexline,Conveyors Solutions India PVT LTD,Srinivasa Industries,Conveyors Corner Tracks,Conveyors Return Roller,Conveyors Base Support,Conveyors Brackets,coveyor solutions india pvt. ltd."/>
       </Helmet>   
            <div className="header-conveyorcom">
                <div className="overlay-slat">
                <h4>Conveyor Components</h4>
                </div>
            </div>
            <div className="info-slatchain">
                <h4>Conveyor Components</h4>
                <p>We are a leading suppliers of conveyor and conveyor components across the country.we offer a wide range of SS/CS slat chains , modular belts , pvc belts , mesh belts,roller chains at the best cost with premium Quality.Superior Quality materials are used in the manufacturing process. These are used in various industries such as Bottling Industry, food industry , tyre industry  etc.,We are also supplying non-standard Tailor-made size chains globally.</p>
            </div>
             <div className="types" >
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FConveyor%20components%2FFL-CORNER%20TRACK-converted.pdf?alt=media&token=20f6f0c7-1bc9-4c47-9912-7e88b4700ebb' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={corner} productname='FL-Corner Track'/></a>
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FConveyor%20components%2FFL-RETURN%20ROLLER-converted.pdf?alt=media&token=4f96d64c-7d23-4df2-a007-ec78dcb8eda7' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={returnroll} productname='FL-Return Roller'/></a>
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FConveyor%20components%2FFL-base-support-converted.pdf?alt=media&token=79ba064a-de08-446c-9216-7e123f7ea368' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={basesupp} productname='FL-Base Support'/></a>
                <a rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FConveyor%20components%2FFL-BRACKET-converted.pdf?alt=media&token=fc6e73e5-2cff-479b-88fa-fd2d555c1574' target='_blank' style={{textDecoration:'none'}}><Simpleproduct2 image={brackets} productname='FL-Bracket'/></a>
            </div>
        </div>
    )
}

export default Conveyorcom
