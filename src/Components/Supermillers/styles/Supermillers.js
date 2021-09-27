import styled from "styled-components/macro";

export const Container = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const PromoImage = styled.div`
  background-image: url(${(props) => props.img});
  height: 350px;
  background-size: cover;
  background-position-y: 75%;
  text-align: center;
`;

export const Opacity = styled.div`
  width: 100%;
  height: 350px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Logo = styled.div`
  background-image: url(${(props) => props.logo});
  background-repeat: no-repeat;
  height: 80px;
  width: 240px;
  margin-top: 40px;
  background-size: contain;
  margin-bottom: 16px;
`;

export const Heading = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  margin: 0 0 25px 0;
  color: #fff;
  font-weight: 600;
`;

export const SubHeading = styled.p`
  color: #fff;
  margin-bottom: 40px;
`;

export const Dashed = styled.div`
  & {
    color: #9b9b9b;
    text-transform: uppercase;
  }
  &:before {
    position: relative;
    top: -5px;
    margin: 0 10px;
    display: inline-block;
    content: "";
    width: 40px;
    height: 1px;
    background-color: #9b9b9b;
  }
  &:after {
    position: relative;
    top: -5px;
    margin: 0 10px;
    display: inline-block;
    content: "";
    width: 40px;
    height: 1px;
    background-color: #9b9b9b;
  }
`;

// Features

export const Features = styled.div`
  width: 830px;
  margin: 0 auto;
  margin-top: -65px;
  margin-bottom: 30px;
  justify-content: space-around;
`;

export const Items = styled.div`
  width: 195px;
  margin: auto;
`;

export const Box = styled.div`
  height: 130px;
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #fff;
  padding: 0 15px;
  box-shadow: 0 20px 20px -10px #eee;
`;

export const Points = styled.div`
  background-image: url(${(props) => props.points});
  background-size: 60px;
  background-position: 16px 10px;
  background-repeat: no-repeat;
  width: 90px;
  height: 75px;
  margin: auto;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
`;

export const Para = styled.p`
  margin-top: 20px;
`;

// Button

export const Button = styled.a`
  padding: 10px 60px;
  border: 1px solid #666;
  text-transform: uppercase;
  text-decoration: none;
  color: #323a44;
  border-radius: 3px;
`;
