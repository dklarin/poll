import React from "react";
import styled from "styled-components";
import pen from "./assets/pen.png";

const Img = styled.img`
  place-self: center;
`;

export const Navigation = (props) => {
  return (
    <div>
      <img
        height={20}
        src={pen}
        onClick={() => props.history.push(`/results/`)}
      />
      - <img height={20} src={pen} />{" "}
    </div>
  );
};
