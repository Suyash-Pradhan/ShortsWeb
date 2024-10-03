import React from 'react'
import './videofooter.css'
import cd from './assets/cd.png'
import Marquee from "react-fast-marquee";
import MusicNoteTwoToneIcon from '@mui/icons-material/MusicNoteTwoTone';


function Videofooter({channel,desc,song}) {
  return (
    <div className='videoFooter'>
      <div className='footer_text'>

        <h3>@{channel}</h3>
        <p>{desc}</p> 
        <div className='myclass'>
        <MusicNoteTwoToneIcon/>
        <Marquee >
                <span>{song}</span>
            </Marquee>
          </div> 
          


      </div>
      <img
        className='cd_logo'
        src={cd}
        alt='cd Logo'

      />
    </div>


  )
}

export default Videofooter
