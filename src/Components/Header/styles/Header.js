import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  background-color: #33414f;
  height: 70px;
  padding: 0 15px 0 25px;
  align-items: center;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.img`
  height: 35px;
  width: 120px;
`;

export const NavItems = styled.ul`
  display: flex;
`;

export const NavItemContainer = styled.li`
  padding: 20px;
`;

export const NavLinks = styled.a`
  & {
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    position: relative;
    height: 100%
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: width 0.5s;
  }
  &:hover::after {
    width: 100%;
  }
`;
