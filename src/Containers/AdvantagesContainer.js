import React, { useEffect } from "react";
import { Advantages } from "../Components";
import { connect } from "react-redux";
import { getAdvantages } from "../redux/data/data-action";

const AdvantagesContainer = ({ setAdvantages, advantagesData }) => {
  useEffect(() => {
    setAdvantages();
  }, [setAdvantages]);

  return (
    <Advantages>
      <Advantages.Heading>THE ZOOMCAR ADVANTAGE</Advantages.Heading>
      <Advantages.Subheading>
        We simplified car rentals, so you can focus on what's important to you.
      </Advantages.Subheading>
      <Advantages.AdvantagesItems>
        {advantagesData.map((item) => (
          <Advantages.AdvantageItem key={item.id}>
            <Advantages.Image img={item.image} alt="" />
            <Advantages.AdvantageItemHeading>
              {item.title}
            </Advantages.AdvantageItemHeading>
            <Advantages.AdvantageItemSubHeading>
              {item.subTitle}
            </Advantages.AdvantageItemSubHeading>
          </Advantages.AdvantageItem>
        ))}
      </Advantages.AdvantagesItems>
    </Advantages>
  );
};

const mapStateToProps = (state) => {
  return {
    advantagesData: state.data.advantages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAdvantages: () => dispatch(getAdvantages()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvantagesContainer);
