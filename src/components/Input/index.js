import React from "react";
import { Container } from "./styles";

const Input = ({ iconLeft: IconLeft, iconRight: IconRight, ...rest }) => {
  return (
    <Container>
      {IconLeft && <IconLeft size={25} />}
      <input {...rest} />
      {IconRight && <IconRight size={25} />}
    </Container>
  );
};

export default Input;
