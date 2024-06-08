import React from 'react'
import '../roller.css'
import { Helmet } from 'react-helmet';
import i1 from '../img/roller/1.jpg' 
import i2 from '../img/roller/2.jpg' 
import i3 from '../img/roller/3.jpg' 
import i4 from '../img/roller/4.jpg' 
import i5 from '../img/roller/5.jpg'
import i6 from '../img/roller/6.jpg'  
import i7 from '../img/roller/7.jpg'
import i8 from '../img/roller/8.jpg'
import i9 from '../img/roller/9.jpg'
import i10 from '../img/roller/10.jpg'
import i11 from '../img/roller/11.jpg' 
import i12 from '../img/roller/12.jpg' 
import i13 from '../img/roller/13.jpg' 
import i14 from '../img/roller/14.jpg' 
import i15 from '../img/roller/15.jpg'
import i16 from '../img/roller/16.jpg'  
import i17 from '../img/roller/17.jpg'
import i18 from '../img/roller/18.jpg'
function Rollerchain() {
    const img = [i1,i2,i3,i4,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16,i5,i17,i18]
    return (
        <div>
        <Helmet>
          <meta charSet="utf-8" />
          <link rel="canonical" href="http://ConveyorSolution.com/" />
          <meta
            name="description"
            content="Conveyor solutions can provide its customers with a large range of products: all types of conveyors,ss and plastic chains,modular belts,high temperature belts,pvc belts ,pu belts ,rubber belts,wire mesh belts,roller chain etc with a maximum amount of customization according to customers needs, in the most convenient location in Chennai"
          />
          <meta name="description" content="We are a leading suppliers of conveyor and conveyor components across the India.we offer a wide range of SS/CS slat chains , modular belts , pvc belts , mesh belts,roller chains at the best cost with premium Quality.Superior Quality materials are used in the manufacturing process."/>
          <meta name="keywords" content="Conveyors in Chennai,slat chain,pvc belts,Modular belts,Roller Chain,Wire Mesh,Wear Strip,Conveyor Components,Conveyors Spare,in Chennai,Flexline,Conveyors Solutions India PVT LTD,Srinivasa Industries,Roller Chain,Roller Chain for Conveyors,coveyor solutions india pvt. ltd."/>
        </Helmet>
            <div className="header-roll">
                <div className="overlay-slat">
                <h4>Roller Chain</h4>
                </div>
            </div>
            <div className="info-slatchain">
                <h4>Roller Chain</h4>
                <p>We are a leading suppliers of conveyor and conveyor components across the country.we offer a wide range of SS/CS slat chains , modular belts , pvc belts , mesh belts,roller chains at the best cost with premium Quality.Superior Quality materials are used in the manufacturing process. These are used in various industries such as Bottling Industry, food industry , tyre industry  etc.,We are also supplying non-standard Tailor-made size chains globally.</p>
            </div>
            <div className="img-roll">
                {img.map((i)=>{
                    return <img src={i} alt=''/>
                })}
            </div>
            <div className='roll-table'>
                <table>
                    <thead>
                        <tr>
                            <th className='head-ele2'>S.no</th>
                            <th className='head-ele2'>Pitch(P)</th>
                            <th className='head-ele2'>Diameter of roller(d2)</th>
                            <th className='head-ele2'>Inner Width of Inner Link(b1)</th>
                            <th className='head-ele2' colSpan='2'>Diameter of pin</th>
                            <th className='head-ele2'>Length of pin(L)</th>
                            <th className='head-ele2'>Height of Inner side Bar(h2)</th>
                            <th className='head-ele2'>Tensile Strength(Q)</th>
                            <th className='head-ele2'>Weigth Per Meter(q)</th>
                        </tr>
                        <tr>
                            <th className='head-ele2'>Units</th>
                            <th className='head-ele2'>mm</th>
                            <th className='head-ele2'>mm</th>
                            <th className='head-ele2'>mm</th>
                            <th className='head-ele2'>mm</th>
                            <th className='head-ele2'>mm</th>
                            <th className='head-ele2'>mm</th>
                            <th className='head-ele2'>mm</th>
                            <th className='head-ele2'>KN</th>
                            <th className='head-ele2'>Kg/m</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <th>31.75</th>
                            <th>19.05</th>
                            <th>9.53</th>
                            <th>7.22</th>
                            <th>5.13</th>
                            <th>20.5</th>
                            <th>1715.00</th>
                            <th>20.4</th>
                            <th>1.25</th>
                        </tr>
                        <tr>
                            <th>2</th>
                            <th>38.10</th>
                            <th>22.23</th>
                            <th>12.70</th>
                            <th>8.31</th>
                            <th>6.00</th>
                            <th>25.8</th>
                            <th>17.00</th>
                            <th>24.0</th>
                            <th>1.72</th>
                        </tr>
                        <tr>
                            <th>3</th>
                            <th>63.00</th>
                            <th>40.00</th>
                            <th>15.00</th>
                            <th>16.00</th>
                            <th>12.10</th>
                            <th>35.0</th>
                            <th>28.350</th>
                            <th>50.0</th>
                            <th>4.20</th>
                        </tr>
                        <tr>
                            <th>4</th>
                            <th>50.0</th>
                            <th>31.0</th>
                            <th>14.50</th>
                            <th>13.20</th>
                            <th>10.43</th>
                            <th>31.1</th>
                            <th>25.00</th>
                            <th>30.0</th>
                            <th>3.29</th>
                        </tr>
                        <tr>
                            <th>5</th>
                            <th>101.60</th>
                            <th>47.60</th>
                            <th>19.00</th>
                            <th>19.05</th>
                            <th>13.60</th>
                            <th>43.8</th>
                            <th>39.00</th>
                            <th>84.3</th>
                            <th>5.78</th>
                        </tr>
                        <tr>
                            <th>6</th>
                            <th>50.80</th>
                            <th>30.00</th>
                            <th>10.50</th>
                            <th>11.40</th>
                            <th>8.2</th>
                            <th>27.4</th>
                            <th>26.00</th>
                            <th>50.0</th>
                            <th>2.56</th>
                        </tr>
                        <tr>
                            <th>7</th>
                            <th>152.4</th>
                            <th>66.7</th>
                            <th>38.0</th>
                            <th>26.92</th>
                            <th>19.56</th>
                            <th>94.3</th>
                            <th>50.8</th>
                            <th>266.6</th>
                            <th>27.5</th>
                        </tr>
                        <tr>
                            <th>8</th>
                            <th>101.6</th>
                            <th>47.6</th>
                            <th>19.1</th>
                            <th>19.05</th>
                            <th>13.2</th>
                            <th>47</th>
                            <th>38.1</th>
                            <th>66.7</th>
                            <th>6.35</th>
                        </tr>
                        <tr>
                            <th>9</th>
                            <th>76.2</th>
                            <th>31.8</th>
                            <th>15.0</th>
                            <th>14.0</th>
                            <th>10.1</th>
                            <th>39</th>
                            <th>25.5</th>
                            <th>27.0</th>
                            <th>3.10</th>
                        </tr>
                        <tr>
                            <th>10</th>
                            <th>101.6</th>
                            <th>31.8</th>
                            <th>15.0</th>
                            <th>14.0</th>
                            <th>10.1</th>
                            <th>39</th>
                            <th>25.5</th>
                            <th>27.0</th>
                            <th>2.80</th>
                        </tr>
                        <tr>
                            <th>11</th>
                            <th>101.6</th>
                            <th>47.6</th>
                            <th>19.05</th>
                            <th>19.05</th>
                            <th>13.2</th>
                            <th>47.0</th>
                            <th>38.1</th>
                            <th>54.0</th>
                            <th>5.82</th>
                        </tr>
                        <tr>
                            <th>12</th>
                            <th>152.4</th>
                            <th>31.8</th>
                            <th>15.0</th>
                            <th>14.0</th>
                            <th>10.1</th>
                            <th>39.0</th>
                            <th>25.5</th>
                            <th>27.0</th>
                            <th>2.52</th>
                        </tr>
                        <tr>
                            <th>13</th>
                            <th>152.4</th>
                            <th>88.9</th>
                            <th>38.1</th>
                            <th>31.8</th>
                            <th>22.9</th>
                            <th>83.0</th>
                            <th>61.0</th>
                            <th>160.0</th>
                            <th>29.4</th>
                        </tr>
                        <tr>
                            <th>14</th>
                            <th>63.0</th>
                            <th>30</th>
                            <th>10.0</th>
                            <th>11.5</th>
                            <th>8.2</th>
                            <th>26.6</th>
                            <th>26.0</th>
                            <th>35.0</th>
                            <th>4.0</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Rollerchain
