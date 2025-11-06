"use client";

import styled from "styled-components";

const MyStyledButton = styled.button`
  background-color: #4ac;
  color: #fff;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
`;

const CustomButton = ({ children }) => {
  return <MyStyledButton>{children}</MyStyledButton>;
};

export default CustomButton;
