import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  height: 320px;
  align-items: center;
`

export const FoldWrap = styled.div`
display: flex;
  justify-content: space-between;
  text-align: center;
  width: 100%;
`

export const StatItem = styled.div`
  flex-grow: 1;
`

export const LazyImg = styled.img`
  height: 75px;
  width: 120px;
`

export const Stats = styled.h3`
  font-size: 30px;
  font-weight: 600;
  margin: 20px;
`

export const Title = styled.p`
  font-size: 18px;
  margin: 10px 0 0;
`