import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    
    >header{
        width: 100%;
        height: 144px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        padding: 0 106px ;
        display: flex;
        align-items: center;

        button{
            border: none;
            background: none;
        }

        svg{
            font-size: 24px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    }
    
    `

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto ;

    >div:nth-child(3){ //div pois o Container que envolve o retorno do componente input é uma div
        margin-top: 34px;
    }
    `


export const Avatar = styled.div`
            width:186px;
            height:186px;
            margin: -126px auto 36px; //Define uma margin para cima  automaiza os lados e define uma margim para baixo
    
            position: relative; 

    >img{
        //Primeiramente decidimos o tamanho da imagem para decidir o tamanho da div
        width:186px;
        height:186px;
        border-radius: 50%;

    }
    
    >label{
        height: 48px;
        width: 48px;
        position: absolute;
        background-color: ${({theme}) => theme.COLORS.ORANGE};

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;

       right: 7px;
        bottom: 7px; 

        cursor: pointer;


        input{
            display: none;
        }

        svg{
            font-size: 20px;
            color:  ${({theme}) => theme.COLORS.BACKGROUND_800};;
        }
    }
    
`