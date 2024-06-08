import React from 'react'
import { ReactPhotoCollage } from "react-photo-collage";
import e1 from '../img/meshbelt/eyelink/1.jpg'
import e2 from '../img/meshbelt/eyelink/2.jpg'
import e3 from '../img/meshbelt/eyelink/3.jpg'
import e4 from '../img/meshbelt/eyelink/4.jpg'
import e5 from '../img/meshbelt/eyelink/5.jpg'
import e6 from '../img/meshbelt/eyelink/6.jpg'
import e7 from '../img/meshbelt/eyelink/7.jpg'
import e8 from '../img/meshbelt/eyelink/8.png'
import b1 from '../img/meshbelt/baffle/1.jpg'
import b2 from '../img/meshbelt/baffle/2.jpg'
import b3 from '../img/meshbelt/baffle/3.jpg'
import b4 from '../img/meshbelt/baffle/4.jpg'
import b5 from '../img/meshbelt/baffle/5.jpg'
import b6 from '../img/meshbelt/baffle/6.jpg'
import c1 from '../img/meshbelt/compoundbalanced/1.jpg'
import c2 from '../img/meshbelt/compoundbalanced/2.jpg'
import c3 from '../img/meshbelt/compoundbalanced/3.jpg'
import c4 from '../img/meshbelt/compoundbalanced/4.jpg'
import c5 from '../img/meshbelt/compoundbalanced/5.jpg'
import c6 from '../img/meshbelt/compoundbalanced/6.jpg'
import f1 from '../img/meshbelt/flat-flex/1.jpg'
import f2 from '../img/meshbelt/flat-flex/2.jpg'
import f3 from '../img/meshbelt/flat-flex/3.jpg'
import f4 from '../img/meshbelt/flat-flex/4.jpg'
import f5 from '../img/meshbelt/flat-flex/5.jpg'
import f6 from '../img/meshbelt/flat-flex/6.jpg'
import h1 from '../img/meshbelt/horseshoe/1.jpg'
import h2 from '../img/meshbelt/horseshoe/2.jpg'
import h3 from '../img/meshbelt/horseshoe/3.png'
import h4 from '../img/meshbelt/horseshoe/4.jpg'
import h5 from '../img/meshbelt/horseshoe/5.jpg'
import h6 from '../img/meshbelt/horseshoe/6.jpg'
import s1 from '../img/meshbelt/spiral/1.jpg'
import s2 from '../img/meshbelt/spiral/2.jpg'
import s3 from '../img/meshbelt/spiral/3.jpg'
import s4 from '../img/meshbelt/spiral/4.jpg'
import s5 from '../img/meshbelt/spiral/5.jpg'
import s6 from '../img/meshbelt/spiral/6.jpg'
import ss1 from '../img/meshbelt/ss/1.jpg'
import ss2 from '../img/meshbelt/ss/2.jpg'
import ss3 from '../img/meshbelt/ss/3.jpg'
import ss4 from '../img/meshbelt/ss/4.jpg'
import ss5 from '../img/meshbelt/ss/5.jpg'
import ss6 from '../img/meshbelt/ss/6.jpg'
import ss7 from '../img/meshbelt/ss/7.jpg'
import a1 from '../img/meshbelt/annealingfurnace/1.jpg'
import a2 from '../img/meshbelt/annealingfurnace/2.jpg'
import a3 from '../img/meshbelt/annealingfurnace/3.jpg'
import a4 from '../img/meshbelt/annealingfurnace/4.jpg'
import a5 from '../img/meshbelt/annealingfurnace/5.jpg'
import a6 from '../img/meshbelt/annealingfurnace/6.jpg'
import en1 from '../img/meshbelt/encryptedss/1.jpg'
import en2 from '../img/meshbelt/encryptedss/2.jpg'
import en3 from '../img/meshbelt/encryptedss/3.jpg'
import en4 from '../img/meshbelt/encryptedss/4.jpg'
import en5 from '../img/meshbelt/encryptedss/5.jpg'
import en6 from '../img/meshbelt/encryptedss/6.jpg'
import { Helmet } from 'react-helmet';
function Wiremesh({isdesk}) {
const eyelinksetting = {
  width: isdesk?'65%':'100%',
  height: [isdesk?'350px':'200px', isdesk?'170px':'120px'],
  layout: [2, 4],
  photos: [
    { source: e1 },
    { source: e2 },
    { source: e3 },
    { source: e4 },
    { source: e5 },
    { source: e6 },
    { source: e7 },
    { source: e8 }
  ],
  showNumOfRemainingPhotos: true
};
const bafflesetting = {
  width: isdesk?'65%':'100%',
  height: [isdesk?'350px':'200px', isdesk?'170px':'120px'],
  layout: [2, 3],
  photos: [
    { source: b6 },
    { source: b4 },
    { source: b3 },
    { source: b2 },
    { source: b5 },
    { source: b1 }
  ],
  showNumOfRemainingPhotos: true
};
const compsetting = {
  width: isdesk?'65%':'100%',
  height: [isdesk?'350px':'200px', isdesk?'170px':'120px'],
  layout: [1, 4],
  photos: [
    { source: c5 },
    { source: c6 },
    { source: c3 },
    { source: c2 },
    { source: c4 },
    { source: c1 }
  ],
  showNumOfRemainingPhotos: true
};
const flatsetting = {
  width: isdesk?'65%':'100%',
  height: [isdesk?'350px':'200px', isdesk?'170px':'120px'],
  layout: [1, 4],
  photos: [
    { source: f3 },
    { source: f6 },
    { source: f5 },
    { source: f2 },
    { source: f4 },
    { source: f1 }
  ],
  showNumOfRemainingPhotos: true
};
const horsesetting = {
  width: isdesk?'65%':'100%',
  height: [isdesk?'350px':'200px', isdesk?'170px':'120px'],
  layout: [2, 3],
  photos: [
    { source: h2 },
    { source: h4 },
    { source: h5 },
    { source: h3 },
    { source: h6 },
    { source: h1 }
  ],
  showNumOfRemainingPhotos: true
};
const spiralsetting = {
  width: isdesk?'65%':'100%',
  height: [isdesk?'350px':'200px', isdesk?'170px':'120px'],
  layout: [2, 3],
  photos: [
    { source: s2 },
    { source: s3 },
    { source: s5 },
    { source: s4 },
    { source: s6 },
    { source: s1 }
  ],
  showNumOfRemainingPhotos: true
};
const sssetting = {
  width: isdesk?'65%':'100%',
  height: [isdesk?'350px':'200px', isdesk?'170px':'120px'],
  layout: [1, 4],
  photos: [
    { source: ss7 },
    { source: ss3 },
    { source: ss5 },
    { source: ss4 },
    { source: ss6 },
    { source: ss1 },
    { source: ss2 }
  ],
  showNumOfRemainingPhotos: true
};
const asetting = {
  width: isdesk?'65%':'100%',
  height: [isdesk?'350px':'200px', isdesk?'170px':'120px'],
  layout: [2, 3],
  photos: [
    { source: a1 },
    { source: a2 },
    { source: a4 },
    { source: a6 },
    { source: a5 },
    { source: a3 }
  ],
  showNumOfRemainingPhotos: true
};
const esetting = {
  width: isdesk?'65%':'100%',
  height: [isdesk?'350px':'200px', isdesk?'170px':'120px'],
  layout: [2, 3],
  photos: [
    { source: en3 },
    { source: en5 },
    { source: en4 },
    { source: en6 },
    { source: en1 },
    { source: en2 }
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
          <meta name="keywords" content="Conveyors in Chennai,slat chain,pvc belts,Modular belts,Roller Chain,Wire Mesh,Wear Strip,Conveyor Components,Conveyors Spare,in Chennai,Flexline,Conveyors Solutions India PVT LTD,Srinivasa Industries,Eye Link Mesh Belt,Baffle Mesh Belt,Compound Mesh Belt,Flat Flex Mesh Belt,Horseshoe Mesh Belt,Sprial Mesh Belt,Stainless Steel Mesh Belt,Encrypted Stainless Steel Mesh Belt,Anneling Furnace Mesh Belt,Wire Mesh,coveyor solutions india pvt. ltd."/>
        </Helmet>
            <div className="header-mesh">
                <div className="overlay-slat">
                <h4>Mesh Belt</h4>
                </div>
            </div>
            <div className="info-slatchain">
                <h4>Mesh Belt</h4>
                <p>We are a leading suppliers of conveyor and conveyor components across the country.we offer a wide range of SS/CS slat chains , modular belts , pvc belts , mesh belts,roller chains at the best cost with premium Quality.Superior Quality materials are used in the manufacturing process. These are used in various industries such as Bottling Industry, food industry , tyre industry  etc.,We are also supplying non-standard Tailor-made size chains globally.</p>
            </div>
            <div className='img-div'>
                <h4>Eye Link Mesh Belt</h4>
                <ReactPhotoCollage {...eyelinksetting}/>
            </div>
            <div className='img-div'>
                <h4>Baffle Mesh Belt</h4>
                <ReactPhotoCollage {...bafflesetting}/>
            </div>
            <div className='img-div'>
                <h4>Compound Balanced Mesh Belt</h4>
                <ReactPhotoCollage {...compsetting}/>
            </div>
            <div className='img-div'>
                <h4>Flat Flex Mesh Belt</h4>
                <ReactPhotoCollage {...flatsetting}/>
            </div>
            <div className='img-div'>
                <h4>Horseshoe Mesh Belt</h4>
                <ReactPhotoCollage {...horsesetting}/>
            </div>
            <div className='img-div'>
                <h4>Spiral Mesh Belt</h4>
                <ReactPhotoCollage {...spiralsetting}/>
            </div>
            <div className='img-div'>
                <h4>Stainless Steel Mesh Belt</h4>
                <ReactPhotoCollage {...sssetting}/>
            </div>
            <div className='img-div'>
                <h4>Encrypted Stainless Steel Mesh Belt</h4>
                <ReactPhotoCollage {...esetting}/>
            </div>
            <div className='img-div'>
                <h4>Anneling furnace Mesh Belt</h4>
                <ReactPhotoCollage {...asetting}/>
            </div>
        </div>
    )
}

export default Wiremesh
