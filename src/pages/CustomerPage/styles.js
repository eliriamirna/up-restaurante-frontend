import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  margin: 10px 170px;

  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

export const Header = styled.header`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  #input {
    margin-right: 80px;
    width: 500px;
  }
`;

export const ItemList = styled.section`
  height: 230px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #505050;
  overflow-y: hidden;
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 1px;
    background-color: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background: #ffc600a3;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ffc600;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
  padding: 5px;
  margin: 0px 5px;
  height: 200px;
  width: 300px;
  background-color: #fff;
  border-radius: 10px;

  transition: all 0.2s ease-in-out;

  #img_div {
    display: flex;
    align-items: center;
  }

  img {
    margin-right: 15px;
    width: 140px;
    height: 110px;
    border-radius: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 110px;
  }

  p {
    font-size: 13px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const ShoppingCart = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 60px;

  div {
    display: flex;
    justify-content: space-between;
  }

  #submit-button {
    margin-top: 15px;
  }
`;

export const ShoppingCartItems = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  height: 300px;
  border-radius: 10px;
  border: 3px solid #ffc600;

  ul {
    list-style-type: none;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 1px;
      background-color: #fff;
    }

    ::-webkit-scrollbar-thumb {
      background: #ffc600a3;
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #ffc600;
    }
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 10px;
  border: 2px solid #b4b3b1;

  div {
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    width: 80px;

    button {
      padding: 5px;
      display: flex;
      align-items: center;
      background: #ffeeb2;
      border: 2px solid #ffc600;
      border-radius: 5px;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #ffc600;
      }
    }
  }
`;

export const ShoppingCartSummary = styled.aside`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 500px;
  height: 300px;
  border-radius: 10px;
  border: 3px solid #ffc600;

  h1 {
    display: flex;
    justify-content: center;
    padding: 5px;
  }

  #payment-type {
    margin-right: 5px;
    padding: 8px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background: #ffeeb2;
    border: 2px solid #ffc600;
    color: #666360;

    select {
      flex: 1;
      background: transparent;
      border: 0;
      color: #000;
      font-size: 16px;
    }
  }

  #value-summary {
    display: flex;
    justify-content: space-around;
  }
`;

export const BoxValue = styled.div`
  width: 200px;
  padding: 15px;
  background-color: #ffc600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  strong {
    margin-top: 5px;
    font-size: 25px;
  }
`;
