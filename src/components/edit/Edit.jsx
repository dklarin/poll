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
import styled from "styled-components";
import pen from "../../ui/assets/pen.png";

const Label = styled.label`
  border-radius: 5px;
  border: 1px lightgray solid;
  padding: 20px;
  width: 200px;

  &:hover {
    border: 1px black solid;
  }
`;

const Input = styled.input`
  border-radius: 5px;
  border: 1px lightgray solid;
  padding: 20px;
  width: 200px;
  &:hover {
    border: 1px lightgray solid;
  }
`;

const RoundedDiv = styled.div`
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

export const Edit = () => {
  const [state, setState] = useState(false);
  const [labelo, setLabelo] = useState(true);
  const [anketa, setAnketa] = useState("Nova anketa");
  const [nesto, setNesto] = useState("Nešto");

  const handleChange = (e) => {
    setAnketa(e);
  };

  return (
    <Container>
      <ItemA>
        <MainHeader style={{ marginTop: "5px" }}>
          <FlexRow>
            <FlexColumn>Ankete</FlexColumn>
          </FlexRow>
          <FlexRow>
            <FlexColumn>Uređivanje / {anketa}</FlexColumn>
          </FlexRow>
        </MainHeader>
      </ItemA>
      <ItemB>ItemB</ItemB>
      <ItemC>
        {labelo ? (
          <FlexRow>
            <Label
              onMouseEnter={(e) => {
                setState(true);
              }}
              onMouseLeave={(e) => {
                setState(false);
              }}
            >
              {anketa}
            </Label>
            {state ? (
              <RoundedDiv
                style={{ marginLeft: -25, marginTop: 8 }}
                onMouseEnter={(e) => {
                  setState(true);
                }}
                onMouseLeave={(e) => {
                  setState(false);
                }}
                onClick={(e) => {
                  setLabelo(false);
                }}
              >
                <Img height={20} src={pen} />
              </RoundedDiv>
            ) : (
              <div />
            )}
          </FlexRow>
        ) : (
          <Input
            type="text"
            name="naslov"
            value={anketa}
            onChange={(e) => handleChange(e.target.value)}
            onMouseLeave={(e) => {
              setLabelo(true);
            }}
          />
        )}
        ;
      </ItemC>
    </Container>
  );
};
