import React from "react";
import { Supermillers } from "../Components/index";
import supermillerImg from "../assets/supermillers.jpg";
import supermillerLogo from "../assets/supermiller-icon.svg";
import pointsIcon from "../assets/points.svg";

const SupermillersContainer = () => {
  return (
    <Supermillers>
      <Supermillers.PromoImage img={supermillerImg}>
        <Supermillers.Opacity>
          <Supermillers.Logo logo={supermillerLogo}></Supermillers.Logo>
          <Supermillers.Heading>Supermiller Club</Supermillers.Heading>
          <Supermillers.SubHeading>
            Premium club which rewards you everytime you drive with us
          </Supermillers.SubHeading>
          <Supermillers.Dashed>Supermiller Privileges</Supermillers.Dashed>
        </Supermillers.Opacity>
      </Supermillers.PromoImage>
      <Supermillers.Features>
        <Supermillers.Items>
          <Supermillers.Box>
            <Supermillers.Points points={pointsIcon}></Supermillers.Points>
            <Supermillers.Title>Earn Z points</Supermillers.Title>
          </Supermillers.Box>
          <Supermillers.Para>
            Earn Z-Points for every booking and redeem for additional discount
          </Supermillers.Para>
        </Supermillers.Items>
      </Supermillers.Features>
      <Supermillers.Button>Learn More</Supermillers.Button>
    </Supermillers>
  );
};

export default SupermillersContainer;
