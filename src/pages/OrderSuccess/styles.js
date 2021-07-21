import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  margin: 20px 170px;
  display: flex;
  flex-direction: column;
  height: 90vh;
  border-radius: 10px;
`;

export const Header = styled.header`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;

  h1 {
    font-size: 30px;
  }
`;
