import React from "react";
import { Answer } from "./Answer";

export default {
  title: "Example/Answer",
  component: Answer,
};
const Template = (args) => <Answer {...args} />;

export const Normal = Template.bind({});
