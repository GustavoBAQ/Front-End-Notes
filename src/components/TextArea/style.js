import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 158px;
    resize: none;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    border: none;
    padding: 16px;
    border-radius: 1.1rem;
    color:  ${({theme}) => theme.COLORS.WHITE};

    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};
 ;
    }
`