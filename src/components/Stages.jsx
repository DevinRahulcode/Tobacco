import React from 'react'
import './css/Stages.css'

function Stages() {
  return (
    <div className='Main-con'>
        <div className='top-con'>
            <h2 className='title'>On stage at <span className='text'>Tobacco</span></h2>
            <button className='sBtn'>AGENDA</button>
        </div>
        <div className='bottom'>
            <div className='card'>
                <img className='Imgs' src='https://tobacco.nl/wp-content/uploads/2025/05/Sanctum-LinkedIn-.png'/>
                <h4 className='ti'> <span className='text'>Sanctum Strech</span> - Move, breathe and stretch</h4>
            </div>
              <div className='card'>
                <img className='Imgs' src='https://tobacco.nl/wp-content/uploads/2025/03/IMG_0010_x_crop-copy.png'/>
                <h4 className='ti'>  <span className='text'>TOBACCO LIVE 5</span> - Another Taste & Phil Horneman</h4>
            </div>
              <div className='card'>
                <img className='Imgs' src='https://tobacco.nl/wp-content/uploads/2025/05/Liquid-Spirits-1258-x-839.png'/>
                <h4 className='ti'> <span className='text'>TOBACCO LIVE 6</span> - Liquid Spirits & Phil Horneman</h4>
            </div>
              <div className='card'>
                <img className='Imgs' src='https://tobacco.nl/wp-content/uploads/2025/05/Camille-Bas.png'/>
                <h4 className='ti'> <span className='text'>TOBACCO LIVE 7</span> - Red Light Jazz - Camille Sledge</h4>
            </div>
        </div>
    </div>
  )
}

export default Stages