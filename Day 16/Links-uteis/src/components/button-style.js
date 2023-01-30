import styled from "styled-components";

export const Container = styled.button`
    width: 400px;
    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 15px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 500;
    background-color:white;
    color: black;
    &:disabled{
      opacity: 0.5;
    }`