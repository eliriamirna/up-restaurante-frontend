import styled from "styled-components";

export const Container = styled.button`
  padding: 8px;
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #ffeeb2;
  border: 2px solid #ffc600;
  color: #505050;
  font-weight: 600;
  font-size: 25px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ffc600;
  }
`;
