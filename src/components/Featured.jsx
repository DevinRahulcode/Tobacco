import React from 'react'
import './css/Featured.css'

function Featured() {
    return (
        <div className='featured-con'>
            <div className='left-con'>
                <h5 className='h5s'>Featured</h5>
                <h1 className='h1s'>Art on the facade of <span className='text'>TOBACCO</span> Theater by <span className='text'>Juna Horstmans.</span></h1>
                <p className='tags'>How do you merge imagination and precision in art? We spoke with Juna Horstmans, who transforms the everyday into intriguing compositions.
                    From collecting images to cutting and layering colorful pieces, discover how passion and precision blend into a unique art form.</p>
                <button className='gbtn'>Learn More</button>
            </div>
            <div className='right-con'>
                <img className='fImg' src='https://tobacco.nl/wp-content/uploads/2024/11/Uitgelicht-Juna-Horstmans.jpg'/>
            </div>
        </div>
    )
}

export default Featured
