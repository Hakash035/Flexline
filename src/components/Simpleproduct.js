import React from 'react'
import '../sinmpleproducts.css'

function Simpleproduct({image,productname}) {
    return (
        <div className='simpleproduct'>
            {/* <div className='prod-img-div'> */}
             <img src={image} alt="" className='prod-img' />
            {/* </div> */}
            {/* <button className='read-more'>READ MORE</button>             */}
            <h5 className='prod-name'>{productname}</h5>
        </div>
    )
}

export default Simpleproduct
