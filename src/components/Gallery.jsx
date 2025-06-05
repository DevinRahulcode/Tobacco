import React from 'react'
import './css/Gallery.css'

function Gallery() {

    return (
        <div className='gal-con'>
            <div className='sticky-con'>
                <p className='ptag'>An <span className='text'>impressive</span> gem in the heart of <span className='text'> Amsterdam.</span> Industrial, fresh, innovative and the love for <span className='text'>detail</span> and <span className='text'>history</span> oozes from the walls!</p>
                <button className='gbtn'>Gallery</button>
            </div>
            <div className='scroll-con'>
                <img className='Imgs1' src='https://tobacco.nl/wp-content/uploads/2024/10/gallery_img_01.jpg'/>
                <img className='Imgs2' src='https://tobacco.nl/wp-content/uploads/2024/10/gallery_img_02-800x1200.jpg'/>
                <img className='Imgs3' src='https://tobacco.nl/wp-content/uploads/2024/10/gallery_img_03-1200x801.jpg'/>
                <img className='Imgs4' src='https://tobacco.nl/wp-content/uploads/2024/10/gallery_img_06-800x1200.jpg'/>
                <img className='Imgs5' src='https://tobacco.nl/wp-content/uploads/2024/10/gallery_img_04.jpg'/>
                <img className='Imgs6' src='https://tobacco.nl/wp-content/uploads/2024/10/gallery_img_05-800x1200.jpg'/>
                <img className='Imgs7' src='https://tobacco.nl/wp-content/uploads/2024/10/gallery_img_07-1200x800.jpg'/>
            </div>
        </div>
    )
}

export default Gallery
