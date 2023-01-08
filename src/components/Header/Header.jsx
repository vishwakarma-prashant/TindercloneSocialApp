import React from "react"
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import Icon_image from "./Icon_image.png"
const Header= ()=>{

const logoImage=Icon_image
    return(
        <div className="header">
            <IconButton>
            <PersonIcon fontSize="large" className="header-icon"/>

            </IconButton>
            <IconButton>
                <img className="header-logo" src={logoImage}  />
            
            </IconButton>
            <IconButton>
            <ChatIcon fontSize="large" className="header-icon" />

            </IconButton>
            
            
        </div>

    )
}

export default Header;