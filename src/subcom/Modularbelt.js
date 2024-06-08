import React from 'react'
import '../modularbelt.css'
import { Helmet } from 'react-helmet';
import fl940 from '../img/pro-imgs/modular/fl-940.jpg'
import fl1500 from '../img/pro-imgs/modular/fl-1500.jpg'
import fl1600t from '../img/pro-imgs/modular/fl-1600T.jpg'
import fl2400 from '../img/pro-imgs/modular/fl-2400.png'
import fl2533 from '../img/pro-imgs/modular/fl-2533.jpg'
import flmbp from '../img/pro-imgs/modular/fl-mbp.jpg'
import flobp from '../img/pro-imgs/modular/fl-obp.jpg'
import fls25s from '../img/pro-imgs/modular/fl-s25s.jpg'
function Simpleproduct2({image,productname}) {
    return (
        <div className='simpleproducts simpleproduct'>
             <img src={image} alt="" className='prod-img prods-img' />
            <h5 className='prod-name'>{productname}</h5>
        </div>
    )
}

function Modularbelt() {
    return (
        <div>
           <div>
         <Helmet>
             <meta charSet="utf-8" />
             <link rel="canonical" href="http://ConveyorSolution.com/" />
             <meta
              name="description"
              content="Conveyor solutions can provide its customers with a large range of products: all types of conveyors,ss and plastic chains,modular belts,high temperature belts,pvc belts ,pu belts ,rubber belts,wire mesh belts etc with a maximum amount of customization according to customers needs, in the most convenient location in Chennai"
            />
            <meta name="description" content="We are a leading suppliers of conveyor and conveyor components across the India.we offer a wide range of SS/CS slat chains , modular belts , pvc belts , mesh belts,roller chains at the best cost with premium Quality.Superior Quality materials are used in the manufacturing process."/>
            <meta name="keywords" content="Conveyors in Chennai,slat chain,pvc belts,Modular belts,Roller Chain,Wire Mesh,Wear Strip,Conveyor Components,Conveyors Spare,in Chennai,Flexline,Conveyors Solutions India PVT LTD,Srinivasa Industries,Modular Belt, FL-940,FL-1600T,FL-1500,FL-2533,FL-2400,FL-MPB,FL-OPB,FL-S25S,coveyor solutions india pvt. ltd."/>
        </Helmet>
            <div className="header-modular">
                <div className="overlay-slat">
                <h4>Modular Belt</h4>
                </div>
            </div>
            <div className="info-slatchain">
                <h4>Modular Belts</h4>
                <p>We are a leading suppliers of conveyor and conveyor components across the country.we offer a wide range of SS/CS slat chains , modular belts , pvc belts , mesh belts,roller chains at the best cost with premium Quality.Superior Quality materials are used in the manufacturing process. These are used in various industries such as Bottling Industry, food industry , tyre industry  etc.,We are also supplying non-standard Tailor-made size chains globally.</p>
            </div>
           </div>
            <div style={{flexWrap:'wrap'}} className="types">
                <a target='_blank' style={{textDecoration:'none'}} rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FModular%20belt%2FFL-940-converted.pdf?alt=media&token=644d7c8d-7f4e-486a-b621-a833e032bb09'><Simpleproduct2 image={fl940} productname='FL-940'/></a>
                <a target='_blank' style={{textDecoration:'none'}} rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FModular%20belt%2FFL-1600T%20(1)-converted.pdf?alt=media&token=cc4dc9ff-4d20-4b2d-af83-10392946f425'><Simpleproduct2 image={fl1600t} productname='FL-1600T'/></a>
                <a target='_blank' style={{textDecoration:'none'}} rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FModular%20belt%2FFL-1500-converted.pdf?alt=media&token=dffc3ff7-d01d-48b8-9049-5e12a99fa689'><Simpleproduct2 image={fl1500} productname='FL-1500'/></a>
                <a target='_blank' style={{textDecoration:'none'}} rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FModular%20belt%2FFL-2533-converted.pdf?alt=media&token=1dfd227b-b306-447e-98d4-a47700d9d71f'><Simpleproduct2 image={fl2533} productname='FL-2533'/></a>
                <a target='_blank' style={{textDecoration:'none'}} rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FModular%20belt%2FFL-2400-converted.pdf?alt=media&token=2423814f-a67d-4215-b782-557bfc095482'><Simpleproduct2 image={fl2400} productname='FL-2400'/></a>
                <a target='_blank' style={{textDecoration:'none'}} rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FModular%20belt%2FFL-MPB-converted.pdf?alt=media&token=2a6d8f74-68e2-44b0-b2e0-690da59cae87'><Simpleproduct2 image={flmbp} productname='FL-MPB'/></a>
                <a target='_blank' style={{textDecoration:'none'}} rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FModular%20belt%2FFL-OPB-converted.pdf?alt=media&token=6bc7c58b-d750-4a62-85f9-9e48ca45732b'><Simpleproduct2 image={flobp} productname='FL-0PB'/></a>
                <a target='_blank' style={{textDecoration:'none'}} rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/flexline-2a401.appspot.com/o/files%2FModular%20belt%2FFL-S25S%20-converted.pdf?alt=media&token=fa4c37c7-eeec-4250-a1ad-8104e3e0ace4'><Simpleproduct2 image={fls25s} productname='FL-S25S'/></a>
            </div>
        </div>
    )
}

export default Modularbelt
