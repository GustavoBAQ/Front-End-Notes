import styled from "styled-components";
import backgoroundImg from "../../assets/background.png"
export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch; //Faz com que os items preencham todo o espaço vertical da direita para a esquerda
    

`

export const Form = styled.form`
    padding: 0 136px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    >h1{
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.ORANGE}
    }

    >h2{    
        font-size: 24px;
        margin: 48px 0;
    }

    >p{  
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    >button{
        margin-top: 30px;
    }

    >a{
        margin-top: 60px;
        color: ${({theme}) => theme.COLORS.ORANGE}
    }



`

export const Background = styled.div`
    flex: 1; //Sinzaliza para utilizar todo o espaço que se encontra desocupado
    background-image: url(${backgoroundImg}) ; //Como a imagem está sendo importada é preciso utilizar essa estrutura
    background-repeat: no-repeat center center;
    background-size: cover;
`