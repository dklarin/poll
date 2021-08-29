import React, { useState } from "react";
import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0rem;
`;

const Label = styled.label`
  width: auto;
  margin-left: 5px;
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

export const Answer = () => {
  const [state, setState] = useState(false);
  const [labelo, setLabelo] = useState(true);
  const [anketa, setAnketa] = useState("Odgovor 1");

  const handleChange = (e) => {
    setAnketa(e);
    //props.dijete(e);
  };

  return labelo ? (
    <FlexRow>
      <input type="checkbox" />
      <Label
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
        {anketa}
      </Label>
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
