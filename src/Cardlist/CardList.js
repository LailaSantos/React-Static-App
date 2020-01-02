import React from "react";
import "../Cardlist/CardList.css";
import CardItem from "../Carditem/CardItem";
import Profile from "../Profile/Profile";
import Stories from "../Stories/Stories";
import Sugestion from "../Sugestion/Sugestion";

const CardList = () => (
  <div className="container">
    <div className="cardlist">
      <ul>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </ul>
    </div>
    <div className="container2">
      <Profile />
      <Stories />
      <Sugestion />
    </div>
  </div>
);

export default CardList;
