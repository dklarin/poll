import React, { useState } from "react";
import styled from "styled-components";
import pen from "./assets/pen.png";

const Label = styled.label`
  border-radius: 5px;
  border: 1px lightgray solid;
  padding: 20px;
  width: auto;
  &:hover {
    border: 1px black solid;
  }
`;

const Input = styled.input`
  border-radius: 5px;
  border: 1px lightgray solid;
  padding: 20px;
  width: auto;
  &:hover {
    border: 1px lightgray solid;
  }
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

export const LabelInput = (props) => {
  const [state, setState] = useState(false);
  const [labelo, setLabelo] = useState(true);
  const [anketa, setAnketa] = useState("Nova anketa");

  const handleChange = (e) => {
    setAnketa(e);
    props.dijete(e)
  };

  return labelo ? (
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
        <Circle
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
        </Circle>
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
  );
};
