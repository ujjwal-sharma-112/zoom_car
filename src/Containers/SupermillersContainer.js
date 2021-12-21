import React from "react";
import { Supermillers } from "../Components/index";

const SupermillersContainer = () => {
  return (
    <Supermillers>
      <Supermillers.PromoImage
        img={
          "https://res.cloudinary.com/dfefjtnby/image/upload/v1640005964/supermillers_sjpnlz.jpg"
        }
      >
        <Supermillers.Opacity>
          <Supermillers.Logo
            logo={
              "https://res.cloudinary.com/dfefjtnby/image/upload/v1640005963/supermiller-icon_lrwsjd.svg"
            }
            alt=""
          ></Supermillers.Logo>
          <Supermillers.Heading>Supermiller Club</Supermillers.Heading>
          <Supermillers.SubHeading>
            Premium club which rewards you every time you drive with us
          </Supermillers.SubHeading>
          <Supermillers.Dashed>Supermiller Privileges</Supermillers.Dashed>
        </Supermillers.Opacity>
      </Supermillers.PromoImage>
      <Supermillers.Features>
        <Supermillers.Items>
          <Supermillers.Box>
            <Supermillers.Points
              points={
                "https://res.cloudinary.com/dfefjtnby/image/upload/v1640005963/points_tad2ia.svg"
              }
              alt=""
            ></Supermillers.Points>
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
