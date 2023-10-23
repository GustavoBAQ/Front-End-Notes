import { styled } from "styled-components";

export const Container = styled.button`

    width: 100%;
    padding: 0 4rem;

    height: 3.5rem;
    background-color: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGOUND_800};
    font-weight: 500;
    border: 0;
    border-radius: 0.5rem;
    opacity: 80%;



`