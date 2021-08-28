import React, { useState } from "react";
import {
  Container,
  ItemA,
  ItemB,
  ItemC,
  ItemD,
  ItemE 
} from "../../style/global-style";
import { MainHeader, FlexColumn, FlexRow } from "../../style/style-kopirani";
import { LabelInput } from "../../ui/LabelInput";
import styled from "styled-components";


const Div = styled.div`
display: flex;
  flex-direction: row;
  justify-content: center;
`


export const Edit = () => {
  
  const [pollName, setPollName] = useState("Nova anketa");
  
  const handleChange = (e) => {
    setPollName(e);
  };

  return (
    <Container>
      <ItemA>
        <MainHeader style={{ marginTop: "5px" }}>
          <FlexRow>
            <FlexColumn>Ankete</FlexColumn>
          </FlexRow>
          <FlexRow>
            <FlexColumn>Uređivanje / {pollName}</FlexColumn>
          </FlexRow>
        </MainHeader>
      </ItemA>
      <ItemB>ItemB</ItemB>
      <ItemC>
        <Div style={{marginTop: 5}}>
        <LabelInput dijete={handleChange}/>
        </Div>
      </ItemC>
    </Container>
  );
};
