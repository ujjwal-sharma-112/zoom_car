import styled from "styled-components";

export const Container = styled.div`
  background-color: #eee;
  padding: 30px 0;
  display: flex;
  --webkit-box-align: center;
  align-items: center;
  --webkit-box-orientation: vertical;
  --webkit-box-direction: normal;
  flex-direction: column;
`

export const Heading = styled.h1`
  color: #666;
  font-size: 24px;
  text-transform: uppercase;
  margin: 20px 0;
`

export const SubHeading = styled.p`
margin-bottom: 20px;
font-weight: 200;
`

export const AdvantagesItems = styled.div`
  width: 1120px;
  display: flex;
  flex-wrap: wrap;
  --webkit-box-pack: justify;
  justify-content: center;
`
export const AdvantageItem = styled.div`
  width: 270px;
  height: 180px;
  display: flex;
  -webkit-box-orient: vertical;
  --webkit-box-direction: normal;
  flex-direction: column;
  --webkit-box-align: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  background-color: #fff;
  margin: 10px;
`

export const Image = styled.div`
  background-image: url(${(props) => props.img});
  width: 50%;
  height: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 30px;
`

export const AdvantageItemHeading = styled.h3`
  color: #70ad4d;
  font-weight: 400;
  font-size: 18px;
  margin: 0 0 15px 0;
`

export const AdvantageItemSubHeading = styled.p`
  font-size: 12px;
  margin: 0 0 15px 0;
`;