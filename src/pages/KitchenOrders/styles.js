import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  margin: 10px 170px;
  display: flex;
  flex-direction: column;
  height: 100vh;
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
  padding: 10px;
  flex-direction: column;
`;

export const Order = styled.li`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  border: 3px solid #ffc600;
  border-radius: 10px;
  width: 100%;

  h1 {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    width: 10%;
  }

  h3 {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    width: 20%;
  }

  ul {
    width: 30%;
    padding: 20px;
  }

  p {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    width: 15%;
  }

  #button {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
  }
`;

export const Item = styled.li`
  padding: 3px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  #name {
    width: 70%;
  }
`;
