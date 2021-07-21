import React from "react";
import { Container } from "./styles";

const TextArea = ({ iconLeft: IconLeft, iconRight: IconRight, ...rest }) => {
  return (
    <Container>
      {IconLeft && <IconLeft size={25} />}
      <textarea {...rest} />
      {IconRight && <IconRight size={25} />}
    </Container>
  );
};

export default TextArea;
