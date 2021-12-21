import React, { useEffect } from "react";
import { Working } from "../Components/index";
import Supermillers from "../Components/Supermillers/index";
import { connect } from "react-redux";
import { getWork } from "../redux/data/data-action";

const WorkingContainer = ({ work, setWork }) => {
  
  useEffect(() => {
    setWork();
  }, [setWork])

  return (
    <Working>
      <Working.Heading>HOW ZOOMCAR WORKS</Working.Heading>
      <Working.SubHeading>
        Drive yourself to an adventure and back in 5 simple steps
      </Working.SubHeading>
      <Working.FoldWrap>
        {work.map((item) => (
          <Working.Item key={item.id}>
            <Working.LazyImg src={item.image} alt="" />
            <Working.ItemHeading>{item.title}</Working.ItemHeading>
            <Working.ItemSubHeading>{item.para}</Working.ItemSubHeading>
          </Working.Item>
        ))}
      </Working.FoldWrap>
      <Supermillers.Button>Sign Up</Supermillers.Button>
    </Working>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setWork: () => dispatch(getWork()),
  };
};

const mapStateToProps = (state) => {
  return {
    work: state.data.work,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkingContainer);
