import styled from "styled-components";

const BigCard = styled.div`
    background: rgb(56,42,93);
    background: linear-gradient(90deg, rgba(56,42,93,0.9360119047619048) 0%, rgba(43,114,189,1) 35%, rgba(135,209,224,1) 100%);
    padding: 100px 0;
    height: 100vh;
    .todocard{
        border: 4px solid black;
        box-shadow: 0 5px 6px 3px black;
        padding: 10px;
        border-radius: 10px;
        background-color: white;
    }
    .wt{
        height: 18px;
        padding: 0 4px;
        margin: 1px;
        display: flex;
        justify-content: center;
        align-items:center;
    }

`;

export default BigCard;