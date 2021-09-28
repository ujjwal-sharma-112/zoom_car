import styled from "styled-components/macro";

export const Container = styled.div`
  background-image: url(${(props) => props.bgImg});
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`

export const FoldWrap = styled.div`
  width: 70%;
  margin: 0 auto;  
`
export const Heading = styled.h2`
  color: #eee;
  font-size: 28px;
  text-transform: uppercase;
  margin: 30px;
  font-weight: 600;
`

export const SubHeading = styled.p`
  font-size: 18px;
  color: #eeeeee;
  width: 50%;
  margin: 30px;
`

export const Store = styled.div`
`

export const StoreImg = styled.a`
  background-image: url(${(props) => props.storeImg});
  display: inline-block;
  width: 140px;
  height: 42px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  margin: 30px;
`