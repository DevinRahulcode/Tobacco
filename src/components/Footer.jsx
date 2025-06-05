import React from 'react'
import './css/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="containerOne">
                <div className="inner-one">
                    <h3 className='h3tag'>Culture & <span className='text'>commerce</span></h3>
                    <p className='tagp'>With commercial revenue, we make art and culture possible and accessible.</p>
                </div>
                <div className="inner-one">
                    <h3 className='h3tag' >Versatile <br/><span className='text'>spaces</span></h3>
                    <p className='tagp'>From intimate gatherings to large-scale events, the rooms adapt perfectly.</p>
                </div>
                <div className="inner-one">
                    <h3 className='h3tag'>Central <br/><span className='text'>location</span></h3>
                    <p className='tagp'>With the beautiful Amsterdam city center as the backdrop.</p>
                </div>
            </div>

            <div className="containerTwo">
                <h1 className='headerTag'>Plan your event at <br/><span className='text'>TOBACCO.</span></h1>

                <div className="details">
                    <div className="detailOne">
                        <p>Vacancies</p>
                        <p>About us</p>
                        <p>TOBACCO Magazine</p>
                        <p>Food book</p>
                    </div>
                    <div className="detailOne">
                        <p>Featured</p>
                        <p>Foundation Stel je Voor</p>
                        <p>Privacy</p>
                        <p>Cookies</p>
                    </div>
                    <div className="detailOne">
                        <p>Address</p>
                        <p>Nes 75-87</p>
                        <p>1012 KD Amsterdam</p>
                    </div>
                    <div className="detailOne">
                        <p>Contact</p>
                        <p>+31 (0)20 330 06 70</p>
                        <p>info@tobacco.nl</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer