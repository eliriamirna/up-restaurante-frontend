import styled from "styled-components";

export const Container = styled.div`
  padding: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: #ffeeb2;
  border: 2px solid #ffc600;
  color: #666360;

  textarea {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;
    font-size: 16px;

    &::placeholder {
      color: #666360;
    }
  }
`;
