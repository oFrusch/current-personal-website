import React from "react";
import SelfPortrait from "../../images/self-portrait.jpg";
import Header from "../header";
import "./styles.scss";

class Homepage extends React.Component {
  render() {
    const description = `Junior Software Engineer at Jebbit. Currently passionate about all
                         things development. Proficient in Ember.js, Ruby on Rails,
                         Python, and teaching myself some React (check out this site).`;

    return (
      <div className="container">
        <Header />
        <div className="centered-content">
          <h1>Owen Carpenter</h1>
          <img className="portrait" src={SelfPortrait} />
          <p className="self-description">{description}</p>
        </div>
      </div>
    );
  }
}

export default Homepage;
