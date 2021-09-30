import React from "react";
import { Working } from "../Components/index";
import workData from "../assets/fixtures/work.json";
import Supermillers from '../Components/Supermillers/index';

const WorkingContainer = () => {
  return (
    <Working>
      <Working.Heading>HOW ZOOMCAR WORKS</Working.Heading>
      <Working.SubHeading>
        Drive yourself to an adventure and back in 5 simple steps
      </Working.SubHeading>
      <Working.FoldWrap>
        {workData.map((item) => (
          <Working.Item>
            <Working.LazyImg src={item.image} />
            <Working.ItemHeading>{item.title}</Working.ItemHeading>
            <Working.ItemSubHeading>{item.para}</Working.ItemSubHeading>
          </Working.Item>
        ))}
      </Working.FoldWrap>
      <Supermillers.Button>Sign Up</Supermillers.Button>
    </Working>
  );
};

export default WorkingContainer;
