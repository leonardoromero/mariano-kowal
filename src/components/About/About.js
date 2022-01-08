import React from 'react'
import bg from '../../img/poly.png'

export const About = () => {
    return (
        <div className='h-screen' style={{ backgroundImage:`url(${bg})`}}>
            <div className="pattern-diagonal-lines-sm gray-lighter">
                {/* <img style="transform:translate(30px, 30px);" src="..."/> */}
            </div>
        </div>
    )
}
