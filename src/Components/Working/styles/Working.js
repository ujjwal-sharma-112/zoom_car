import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 40px 50px;
  text-align: center;
  background-color: #eee;
`

export const Heading = styled.h2`
  color: #666;
  font-size: 24px;
  text-transform: uppercase;
  margin: 40px;
`

export const SubHeading = styled.p`
`

export const FoldWrap = styled.div`
  width: auto;
  display: flex;
  padding: 50px 0;
  justify-content: center;
  margin: 0 auto;
`

export const Item = styled.div`
  width: 220px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 12px 22px 2px rgba(0,0,0,0.1);
  border: 1px solid #eee;
  margin: 0 10px;
`

export const LazyImg = styled.img`
  margin-top: 20px;
  height: 80px;
  width: 80px;
  background-position: center;
  margin: 20px;
`

export const ItemHeading = styled.h4`
  text-transform: uppercase;
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 600;
`

export const ItemSubHeading = styled.p`
margin-bottom: 20px;
font-weight: 200;
`

export const SignUpButton = styled.a`
  & {
    padding: 10px 60px;
    border: 1px solid #666;
    text-transform: uppercase;
    text-decoration: none;
    color: #323a44;
    border-radius: 3px;
    cursor: pointer;
  }
  &:hover {
    padding: 10px 60px;
    border: 1px solid #10a310;
    text-transform: uppercase;
    text-decoration: none;
    color: #323a44;
    border-radius: 3px;
    cursor: pointer;
  }
`;