import styled from "styled-components";

export const Container = styled.div`
  height: 620px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const IntroWrapper = styled.div`
  width: 100%;
  height: 348.33px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 160px;
`;

export const Heading = styled.h1`
  color: #fff;
  font-size: 3.6rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const CitySelector = styled.p`
  color: #fff;
  font-size: 22px;
  font-weight: 400;
`;

export const CitySelectorSpan = styled.span`
  & {
    font-weight: 600;
    color: #fff;
    border-bottom: 1px dashed #fff;
    cursor: pointer;
    margin-left: 10px;
  }
  &:after {
    position: relative;
    top: -5px;
    content: '';
    width: 9px;
    height: 9px;
    border: 0;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(45deg);
    display: inline-block;
    margin-left: 10px;
  }
`;

export const SearchBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 30px;
  justify-content: center;
`;

export const Search = styled.a`
  &{
    width: 540px;
    height: 60px;
    background-color: #fff;
    border-radius: 5px;
    line-height: 60px;
    text-align: left;
    text-indent: 20px;
    font-size: 20px;
    font-weight: 500;
    position: relative;
    cursor: pointer;
    color: #323a44;
    text-decoration: none;
    display: block;
    padding: 8px 20px;
  }
  &:after{
    position: absolute;
    top: 32px;
    right: 30px;
    content: '';
    height: 13px;
    width: 13px;
    border: 0;
    border-right: 2px solid #323a44;
    border-bottom: 2px solid #323a44;
    transform: rotate(-45deg);
    display: inline-block;
  }
`
