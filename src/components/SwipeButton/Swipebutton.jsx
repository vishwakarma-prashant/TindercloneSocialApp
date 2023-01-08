import React from "react";
import "./SwipeButton.css";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

import { IconButton } from "@mui/material";
const Swipebutton = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeBttonRepeat" style={{
        padding:"1vw" ,
        backgroundColor:"white" ,
        boxShadow: " 0px 1px 10px 2px black"
      }}>
        <ReplayIcon fontSize="large"  style={{color:"#0adbf2"}}/>
      </IconButton>
      <IconButton className="swipeBttonClose" style={{
        padding:"1vw" ,
        backgroundColor:"white" ,
        boxShadow: " 0px 1px 10px 2px black"
      }}>
        <CloseIcon fontSize="large" style={{color:"black"}} />
      </IconButton>
      <IconButton className="swipeBttonStar" style={{
        padding:"1vw" ,
        backgroundColor:"white" ,
        boxShadow: " 0px 1px 10px 2px black"
      }}>
        <StarRateIcon fontSize="large" style={{color:"#f20a40"}}/>
      </IconButton>
      <IconButton className="swipeBttonRight" style={{
        padding:"1vw" ,
        backgroundColor:"white" ,
        boxShadow: " 0px 1px 10px 2px black"
      }}>
        <FavoriteIcon fontSize="large" style={{color:"#f20707"}} />
      </IconButton>
      <IconButton className="swipeBttonFlash" style={{
        padding:"1vw" ,
        backgroundColor:"white" ,
        boxShadow: " 0px 1px 10px 2px black"
      }}>
        <FlashOnIcon fontSize="large" style={{color:"#f0a70a"}} />
      </IconButton>
    
    </div>
  );
};

export default Swipebutton;
