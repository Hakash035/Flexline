import React from 'react'
import '../conveyors.css'
import { ReactPhotoCollage } from "react-photo-collage";
import { Helmet } from 'react-helmet'
import b1 from '../img/conveyors/bottling/image.png'
import b2 from '../img/conveyors/bottling/image1.png'
import b3 from '../img/conveyors/bottling/image2.png'
import b4 from '../img/conveyors/bottling/image3.png'
import b5 from '../img/conveyors/bottling/image4.png'
import b6 from '../img/conveyors/bottling/image5.png'
import b7 from '../img/conveyors/bottling/image6.png'
import bu1 from '../img/conveyors/bucket/image.png'
import bu2 from '../img/conveyors/bucket/image1.png'
import bu3 from '../img/conveyors/bucket/image2.png'
import bu4 from '../img/conveyors/bucket/image3.png'
import bu5 from '../img/conveyors/bucket/image4.png'
import c1 from '../img/conveyors/chip/image.png'
import c2 from '../img/conveyors/chip/image1.png'
import c3 from '../img/conveyors/chip/image2.png'
import c4 from '../img/conveyors/chip/image3.png'
import c5 from '../img/conveyors/chip/image4.png'
import c6 from '../img/conveyors/chip/image5.png'
import p1 from '../img/conveyors/pvc/image.png'
import p2 from '../img/conveyors/pvc/image1.png'
import p3 from '../img/conveyors/pvc/image2.png'
import p4 from '../img/conveyors/pvc/image3.png'
import p5 from '../img/conveyors/pvc/image4.png'
import z2 from '../img/conveyors/z/image1.png'
import z3 from '../img/conveyors/z/image2.png'
import z4 from '../img/conveyors/z/image3.png'
import i1 from '../img/conveyors/inclined/image.png'
import i2 from '../img/conveyors/inclined/image1.png'
import i3 from '../img/conveyors/inclined/image2.png'
import i4 from '../img/conveyors/inclined/image3.png'
import i5 from '../img/conveyors/inclined/image4.png'
import i6 from '../img/conveyors/inclined/image5.png'
import t1 from '../img/conveyors/telescope/image.png'
import t3 from '../img/conveyors/telescope/image2.png'
import t4 from '../img/conveyors/telescope/image3.png'
import t5 from '../img/conveyors/telescope/image4.png'
import t6 from '../img/conveyors/telescope/image5.png'
function Conveyor({isdesk}) {
const bottlesetting = {
  width: isdesk?'65%':'100%',
  height: [isdesk?'350px':'200px', isdesk?'170px':'120px'],
  layout: [2, 4],
  photos: [
    { source: b3 },
    { source: b2 },
    { source: b1 },
    { source: b4 },
    { source: b5 },
    { source: b6 },
    { source: b7 }
  ],
  showNumOfRemainingPhotos: true
};
const bucketsetting = {
  width: isdesk?'65%':'100%',
  height: ['250px', isdesk?'170px':'120px'],
  layout: [2, 2],
  photos: [
    { source: bu5 },
    { source: bu2 },
    { source: bu3 },
    { source: bu1 },
    { source: bu4 }
  ],
  showNumOfRemainingPhotos: true
};
const chipsetting = {
  width:isdesk?'65%':'100%',
  height: ['250px', isdesk?'170px':'120px'],
  layout: [1, 4],
  photos: [
    { source: c2 },
    { source: c1 },
    { source: c3 },
    { source: c4 },
    { source: c5 },
    { source: c6}
  ],
  showNumOfRemainingPhotos: true
};
const pvcsetting = {
  width: isdesk?'65%':'100%',
  height: ['250px', isdesk?'170px':'120px'],
  layout: [2, 2],
  photos: [
    { source: p1 },
    { source: p2 },
    { source: p3 },
    { source: p5 },
    { source: p4 }
  ],
  showNumOfRemainingPhotos: true
};
const zsetting = {
  width: isdesk?'65%':'100%',
  height: ['250px', isdesk?'200px':'150px'],
  layout: [1, 2],
  photos: [
    { source: z2 },
    { source: z3 },
    { source: z4 }
  ],
  showNumOfRemainingPhotos: true
};
const incsetting = {
  width:isdesk?'65%':'100%',
  height: ['250px', isdesk?'170px':'120px'],
  layout: [2, 3],
  photos: [
    { source: i2 },
    { source: i1 },
    { source: i3 },
    { source: i4 },
    { source: i5 },
    { source: i6 }
  ],
  showNumOfRemainingPhotos: true
};
const tsetting = {
  width: isdesk?'65%':'100%',
  height: [isdesk?'250px':'175px', isdesk?'170px':'120px'],
  layout: [2, 2],
  photos: [
    { source: t1 },
    { source: t3 },
    { source: t4 },
    { source: t5 },
    { source: t6 }
  ],
  showNumOfRemainingPhotos: true
};
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
        <meta name="keywords" content="Conveyors in Chennai,slat chain,pvc belts,Modular belts,Roller Chain,Wire Mesh,Wear Strip,Conveyor Components,Conveyors Spare,in Chennai,Flexline,Conveyors Solutions India PVT LTD,Srinivasa Industries,Bottling Conveyors,Bucket Coveyors,Chip Conveyors,PVC Conveyors,Inclined Conveyors,Z Conveyors,Telescopic Conveyors,coveyor solutions india pvt. ltd."/>
       </Helmet>   
            <div className="header-con">
                <div className="overlay-slat">
                <h4>Conveyors</h4>
                </div>
            </div>
             <div className="info-slatchain">
                <h4>Conveyor</h4>
                <p>We are a leading suppliers of conveyor and conveyor components across the country.we offer a wide range of SS/CS slat chains , modular belts , pvc belts , mesh belts,roller chains at the best cost with premium Quality.Superior Quality materials are used in the manufacturing process. These are used in various industries such as Bottling Industry, food industry , tyre industry  etc.,We are also supplying non-standard Tailor-made size chains globally.</p>
            </div>
            <div className='img-div'>
                <h4>Bottling Conveyor</h4>
                <ReactPhotoCollage {...bottlesetting}/>
            </div>
            <div className="img-div">
                <h4>Bucket Conveyor</h4>
                <ReactPhotoCollage {...bucketsetting}/>
            </div>
            <div className="img-div">
                <h4>Chip Conveyor</h4>
                <ReactPhotoCollage {...chipsetting}/>
            </div>
            <div className="img-div">
                <h4>PVC Conveyor</h4>
                <ReactPhotoCollage {...pvcsetting}/>
            </div>
             <div className="img-div">
                <h4>Z Conveyor</h4>
                <ReactPhotoCollage {...zsetting}/>
            </div>
            <div className="img-div">
                <h4>Inclined Conveyor</h4>
                <ReactPhotoCollage {...incsetting}/>
            </div>
            <div className="img-div">
                <h4>Telescopic Conveyor</h4>
                <ReactPhotoCollage {...tsetting}/>
            </div>

        </div>
    )
}

export default Conveyor
