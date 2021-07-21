import { createGlobalStyle } from "styled-components";
import backgroundImage from "../assets/background-img.jpg";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background-color: #505050;
        background-image: url(${backgroundImage});
    }
    
    body, input, button, select {
        font-family: 'Open Sans', sans-serif;
        color: #505050;
    }

    button {
        cursor: pointer;
    }
`;
