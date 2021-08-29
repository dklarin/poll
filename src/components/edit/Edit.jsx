import React, { useState } from "react";
import {
  Container,
  ItemA,
  ItemB,
  ItemC,
  ItemD,
} from "../../style/global-style";
import { MainHeader, FlexColumn } from "../../style/style-kopirani";
import { LabelInput } from "../../ui/LabelInput";
import { Navigation } from "../../stories/Navigation";
import styled from "styled-components";
import { Question } from "../../stories/Question";
import { Answer } from "../../stories/Answer";

import pen from "../../stories/assets/pen.png";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 2px solid black;
  display: grid;
  background-color: white;
`;

const Img = styled.img`
  place-self: center;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0rem;
`;

export const Edit = (props) => {
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
      <ItemB>
        <Div style={{ marginTop: 30 }}>
          <FlexRow>
            <Circle onClick={() => props.history.push(`/edit`)}>
              <Img height={20} src={pen} />
            </Circle>
            <div
              style={{
                height: 2,
                width: 400,
                backgroundColor: "black",
                marginTop: 20,
              }}
            ></div>
            <Circle onClick={() => props.history.push(`/results`)}>
              <Img height={20} src={pen} />
            </Circle>
          </FlexRow>
        </Div>
      </ItemB>
      <ItemC>
        <Div style={{ marginTop: 5 }}>
          <LabelInput dijete={handleChange} />
        </Div>
      </ItemC>
      <ItemD style={{ marginTop: 100 }}>
        <FlexRow>
          <div style={{ marginTop: 20 }}>1.</div>
          <Question />
        </FlexRow>
        <Answer />
        <button>Dodaj odgovor</button>
      </ItemD>
    </Container>
  );
};
