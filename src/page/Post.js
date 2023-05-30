import React from "react";
import "./Post.css";
import profile from './profile.png'
import black from './black.png'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplayIcon from '@mui/icons-material/Replay';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import { Avatar } from "@mui/material";


function Post({displayName, username, verified, text, image, avatar }) {
    return (
      <div className="post" >
        <div className="post__avatar">
          <Avatar src = {profile} alt ="profile"/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                jinny{" "}
                <span>
                   <VerifiedUserIcon className="post__badge" /> 
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>BlackPink is coming back!!</p>
            </div>
          </div>
          <img src={black} alt = "black" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <ReplayIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }


export default Post;
