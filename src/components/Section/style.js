import styled from "styled-components";


export const Container = styled.section`
    margin: 28px 0;
    
    >h2{
       color: ${({theme}) => theme.COLORS.GRAY_100};
       font-size : 18px;
       margin-bottom : 16px ;
       padding: 1rem 0;
       border-bottom-width: 1px;
       border-bottom-style: solid;
       border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
       font-weight: 400;
            
    }



`