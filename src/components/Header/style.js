import { styled } from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
    width: 100%;
    padding: 0 85px;
    height: 105px;

    grid-area: header; // Define que esse elemento é um header e quando ocorrer a rolagem da pagina, o elemento continuará como sticky
    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;



`

export const Profile = styled(Link)`
    align-items: center ;
    display: flex;



    > img{
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 2rem;
    }

    > div{
        display: flex;
        flex-direction: column;
        margin-left: 1rem;

        span{
            color: ${({theme}) => theme.COLORS.GRAY_100};
            line-height: 1.4rem;
            font-size: 14px;
        }

        strong{
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }


    `
    export const Logout = styled.button`
        border: none;
        background: none;

        > svg{
            font-size: 24px;
            color: ${({theme}) => theme.COLORS.GRAY_100}

        }
    ` 