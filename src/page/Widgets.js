import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import right from "./right.png";
import styled from "styled-components";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Trends for you</h2>
        <br></br>
        <div className="widgets">
          <Top><p>Trends</p> <Icon><MoreHorizIcon/></Icon>
          </Top>
          <h3>아이유 유애</h3>
          <p>1,384 Tweets</p>
        </div>
        <div className="widgets">
          <Top><p>Trends</p> <Icon><MoreHorizIcon/></Icon>
          </Top>
          <h3>#hello</h3>
          <p>1,456 Tweets</p>
        </div>
        <div className="widgets">
          <Top><p>Trends</p> <Icon><MoreHorizIcon/></Icon>
          </Top>
          <h3>dkssd</h3>
          <p>4,384 Tweets</p>
        </div>
        <div className="widgets">
          <Top><p>Trends</p> <Icon><MoreHorizIcon/></Icon>
          </Top>
          <h3>seventeen</h3>
          <p>1,243 Tweets</p>
        </div>
        <div className="widgets">
          <Top><p>Trends</p> <Icon><MoreHorizIcon/></Icon>
          </Top>
          <h3>NCT</h3>
          <p>5,324 Tweets</p>
        </div>
        <div className="widgets">
          <Top><p>Trends</p> <Icon><MoreHorizIcon/></Icon>
          </Top>
          <h3>TWICE</h3>
          <p>6,324 Tweets</p>
        </div>
        <div className="widgets">
          <Top><p>Trends</p> <Icon><MoreHorizIcon/></Icon>
          </Top>
          <h3>ITZY</h3>
          <p>1,324 Tweets</p>
        </div>
        <div className="widgets">
          <Top><p>Trends</p> <Icon><MoreHorizIcon/></Icon>
          </Top>
          <h3>AESPA</h3>
          <p>2,324 Tweets</p>
        </div>
      </div>
    </div>
  );
}

const Top = styled.div`
display: flex;
`
const Icon = styled.div`
margin-right: 10px;
margin-left: 200px;
`

export default Widgets;
