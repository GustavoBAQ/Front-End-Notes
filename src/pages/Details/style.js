import {styled} from "styled-components"

export const Container = styled.div`

    display: grid;

    grid-template-rows: 105px auto; // Define o tamanho e a quantidades de rows no html
    width: 100%;
    height: 100vh;

    grid-template-areas:  //Nomeia os diferentes campos, como temos apenas 2, serão dois nomeamentos 
    "header"
    "content";

    >main{
        grid-area: content; //Define que o main irá ocupar a aréa denominada de content
        overflow-y: scroll; //Mostra que o main irá receber um elemento scroll no eixo y (horizontal)
        padding: 64px ;
    }
`

export const Links = styled.ul`
list-style: none;

    >li{
        padding-top: 1rem;
    }

    a{
        color: ${({theme}) => theme.COLORS.WHITE};
    }


`

export const Content = styled.div`

    max-width: 550px; //Defini a largura maxima
    margin: 0 auto; //alinha todos os items no centro

    display: flex;
    flex-direction: column;

    >button:first-child{
        align-self: end;
    }

    >h1{
        padding-top:64px ;
        font-weight: 500;
        font-size: 36px;
    }

    >p{
        margin-top: 16px;
        font-size: 16px;
        text-align:justify ;
    }
`