import React from "react";
import "./TweetBox.css";
import { Avatar} from "@mui/material";
import styled from "styled-components";
import profile from './profile.png'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function TweetBo() {
  return (
    <Div>      
      <Box/>
      <Up>
      <Ava><Avatar src = {profile} alt ="profile"/></Ava>
      <Button>Edit Profile</Button>
      </Up>
        <Main>지니</Main>
        <Intro>
        @jinny0604
        <Join>
        <CalendarMonthIcon/>  <Date> Joined May 2023 </Date>
        </Join>
        <Head>
        <Num>10</Num> Following 
        <Num1>1.8M </Num1> Followers
        </Head>
      </Intro>
      </Div>
  );
}

const Div = styled.div `
  padding-bottom: 10px;
  border-bottom: 8px solid var(--twitter-background);
  border: 1px solid var(--twitter-background);
  `
const Box = styled.div `
  padding: 0px;
  background-color: #536471;
  height: 200px;
`
const Up = styled.div `
  display: flex;
  justify-content: flex-start
`
const Ava = styled.div `
 margin-left: 20px;
 width: 125px;
 height: auto;   
`

const Intro = styled.div `
  padding-left: 20px;
  color: #536471;
`
const Main = styled.div `
  padding-left: 20px;
  font-size: 20px;
  font-weight: 700;
`
const Join = styled.div `
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
`
const Date = styled.div `
  padding-left: 5px;
`
const Head = styled.div `
  font-size: large;
  display:flex;
`

const Num = styled.div `
  font-weight: 700;
  padding-right: 10px;
  
`

const Num1 =  styled.div`
  font-weight: 700;
  padding-right: 10px;
  margin-left: 10px;
`

const Button = styled.div`
  background: transparent;
  border: 1.5px solid black;
  font-weight: 900px;
  border-radius: 100px;
  width: 112px;
  height: 32px;
  margin-top: 20px ;
  display: flex;
  justify-content: center;
  align-items: center; 
  margin-top: 20px !important;
  margin-left: auto !important;
  margin-right: 5px;
`
export default TweetBo;
