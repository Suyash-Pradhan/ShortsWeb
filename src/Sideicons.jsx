import React, { useState } from 'react'
import './sideicons.css'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

function Sideicons({likes,msg,share}) {

    const [liked, setlike] = useState(false );
    return (
        <div className='icons'>
            <div className="sidedifficons">

            {liked ? (<FavoriteRoundedIcon fontSize='large' onClick ={(e => setlike(false))}  className="icon-hover"  />):
                 (<FavoriteBorderRoundedIcon fontSize='large' onClick ={(e => setlike(true))} className="icon-hover" />) 
                }

                <p>{liked ? (likes +1):(likes)}</p>
                <span className="popup">Like</span>
            </div>
            <div className="sidedifficons">
                <CommentRoundedIcon fontSize='large' className="icon-hover"  />
                <p>{msg}</p>
                <span className="popup">Comment</span>
            </div>
            <div className="sidedifficons">
                <ShareRoundedIcon fontSize='large'  className="icon-hover"  />
                <p>{share}</p>
                <span className="popup">Share</span>
            </div>
        </div>
    )
}

export default Sideicons


// https://youtube.com/shorts/?si=6Ke_Tf45DhRvwbW3
// https://www.youtube.com/embed/dcGr6--NyxQ