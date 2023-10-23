import styled from "styled-components";

/*
Explicação para confusão que eu tive:

O Conteiner foi declarado com um background mais forte enquanto no input foi tirado as bordas e adicionado 
como background transparente, assim oque deu a aparecer que o Container virou as bordas do input  
*/



export const Container = styled.div`
    
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    
    margin-bottom: 8px;
    border-radius:10px;
    
    >input{
        height: 56px;
        width: 100%;
        
        padding: 12px; 
        
        color: ${({theme}) => theme.COLORS.WHITE};
        background:transparent;
        border: 0;

        &:placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_300};
        
        }
        
    }

    >svg{
        margin-left: 14px;
        font-size: 20px;
    }


`