import React from 'react'
import './sampleindustry.css'

function Mindustry({i1,i2,n1,n2,info1,info2}) {
    return (
        <div className='sampleindustry'>
            <div className="ind-one">
                <img className='ind-img' src={i1} alt="" />
                <h6 className='ind-name' >{n1}</h6>
            </div>
            <div className='info'>
                <div className='in' style={{textAlign:'start',borderBottom:'1px solid black'}} ><p>{info1}</p></div>
                <div className="sep"></div>
                <div className='in' style={{textAlign:'end'}} ><p>{info2}</p></div>
            </div>
            <div className="ind-one">
                 <img className='ind-img' src={i2} alt="" />
                <h6 className='ind-name' >{n2}</h6>
            </div>
        </div>
    )
}

export default Mindustry
