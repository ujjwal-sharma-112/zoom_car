import styled from 'styled-components';

export const Container = styled.div`
  background-color: #43505c;
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 960px;
  margin: 0 auto;
  font-size: 16px;
`

export const Links = styled.a`
  & {
    text-align: center;
    width: 25%;
    display: block;
    padding: 30px 0;
    cursor: pointer;
    text-decoration: none;
    font-weight: 400;
    color: #fff;
  }
  &:hover {
    text-align: center;
    width: 25%;
    display: block;
    padding: 30px 0;
    cursor: pointer;
    text-decoration: none;
    font-weight: 400;
    color: #fff;
    background-color: #333;
  }
`;

export const LazyImg = styled.img`
  width: 40px;
  padding-bottom: 8px;
`

export const Title = styled.p`
`