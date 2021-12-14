import React from "react";
import { PrimaryLinks } from "../Components";
import primaryLinksData from "../assets/fixtures/primary_links.json";

const PrimaryLinksContainer = () => {
  return (
    <PrimaryLinks>
      <PrimaryLinks.FooterWrapper>
        {primaryLinksData.map((data, index) => (
          <PrimaryLinks.Links key={index}>
            <PrimaryLinks.LazyImg src={data.icon} key={data.id} />
            <PrimaryLinks.Title>{data.title}</PrimaryLinks.Title>
          </PrimaryLinks.Links>
        ))}
      </PrimaryLinks.FooterWrapper>
    </PrimaryLinks>
  );
};

export default PrimaryLinksContainer;
