import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    border: none;
    border-radius: .4rem;

    margin-bottom: 16px;
    padding: 22px;
    
    

    >h1{
        text-align: left;

        font-weight: 500;
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE};
        margin-bottom: 22px;
    }

    >footer{
        display: flex;
        justify-content: left;
    }

`
