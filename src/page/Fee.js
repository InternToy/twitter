import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBo from "./Tweetbo";
import Pos from "./Pos";
// import db from "../firebase";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import styled from "styled-components";

function Fee() {
  return (
    <div className="feed">
      <div className="feed__header">
        <Head>
        <h2><KeyboardBackspaceIcon/> Jinny</h2>
        </Head>
        <Foot>5 Tweets</Foot>
      </div>
      <TweetBo />
       <Pos/>
    </div>
  );
}

const Head = styled.div`
  display: flex;
`

const Foot = styled.div`
  padding-left: 30px;
  color: #536471;
`
export default Fee;
