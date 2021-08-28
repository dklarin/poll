import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 0em;
  margin-left: 0em;
  width: 100%;
  height: 750px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;
  grid-gap: 0.2rem;
  height: 100vh;
`;

export const ItemA = styled.div`
  grid-column: 2 / 5;
  grid-row: 1 / 2;
  background-color: yellow;
  border-left: 1px green;
`;

export const ItemB = styled.div`
  grid-column: 2 / 5;
  grid-row: 2 / 4;
  background-color: orange;
`;

export const ItemC = styled.div`
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  background-color: azure;
  position: relative;
`;

export const ItemD = styled.div`
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  display: grid;
  width: auto;
  height: 70px;
  grid-template-columns: 40% auto 40%;
  background-color: blue;
`;
