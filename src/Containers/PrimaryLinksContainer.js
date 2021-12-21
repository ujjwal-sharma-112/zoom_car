import React, { useEffect } from "react";
import { PrimaryLinks } from "../Components";
import { getPrimaryLinks } from "../redux/data/data-action";
import { connect } from "react-redux";

const PrimaryLinksContainer = ({ primaryLinksData, setPrimaryLinks }) => {
  useEffect(() => {
    setPrimaryLinks();
  }, [setPrimaryLinks]);

  return (
    <PrimaryLinks>
      <PrimaryLinks.FooterWrapper>
        {primaryLinksData.map((data) => (
          <PrimaryLinks.Links key={data.id}>
            <PrimaryLinks.LazyImg src={data.icon} alt="" key={data.id} />
            <PrimaryLinks.Title>{data.title}</PrimaryLinks.Title>
          </PrimaryLinks.Links>
        ))}
      </PrimaryLinks.FooterWrapper>
    </PrimaryLinks>
  );
};

const mapStateToProps = (state) => {
  return {
    primaryLinksData: state.data.primaryLinks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPrimaryLinks: () => dispatch(getPrimaryLinks()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrimaryLinksContainer);
