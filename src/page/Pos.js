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
import BarChartIcon from '@mui/icons-material/BarChart';
import styled from "styled-components";

function Pos({displayName, username, verified, text, image, avatar }) {
    return (
      <Main>
      <div className="post" >
        <div className="post__avatar">
          <Avatar src = {profile} alt ="profile"/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <p>
                <b>jinny{" "}</b>
                <span>
                   <VerifiedUserIcon className="post__badge" /> 
                </span>
                <span> @jinny0604 · 36s</span>
              </p>
            </div>
            <div className="post__headerDescription">
              <p>BlackPink is coming back!!</p>
              <p>BlackPink is coming back!!</p>
              <p>BlackPink is coming back!!</p>
            </div>
          </div>
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <ReplayIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <BarChartIcon fontSize="small" />
            <PublishIcon fontSize="small"/> 
          </div>
        </div>
      </div>


      <div className="post" >
        <div className="post__avatar">
          <Avatar src = {profile} alt ="profile"/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <p>
                <b>jinny{" "}</b>
                <span>
                   <VerifiedUserIcon className="post__badge" /> 
                </span>
                <span> @jinny0604 · 1m </span>
              </p>
            </div>
            <div className="post__headerDescription">
              <p>아무거나 일단을 말해볼게요
                <br/>인턴 프로젝트는 정말 하하 재밌습니다.
                <br/>인턴 프로젝트는 정말 하하 재밌습니다.
                <br/>인턴 프로젝트는 정말 하하 재밌습니다.
                <br/>인턴 프로젝트는 정말 하하 재밌습니다.
                <br/>인턴 프로젝트는 정말 하하 재밌습니다.
                <br/>인턴 프로젝트는 정말 하하 재밌습니다.</p>
            </div>
          </div>
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <ReplayIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <BarChartIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
      </Main>
    );
  }

const Main = styled.div`
  border: 1px solid var(--twitter-background);
`
export default Pos;
