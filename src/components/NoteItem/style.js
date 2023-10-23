import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    
    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}`: "none"};
    
    margin-bottom: 8px ;
    padding-right: 16px;
    border-radius:.6rem;
    
    >button{
        background:transparent;
        border: none;
    }
    
    input{
        width: 100%;
        color: ${({theme}) => theme.COLORS.WHITE};
        border:none;
        background: transparent;
        height: 56px;

        padding:12px;
        
    }

    .button-add{
        color: ${({theme}) => theme.COLORS.ORANGE};
        font-size:20px;
    }
    
    .button-remove{
        
        color: ${({theme}) => theme.COLORS.RED};
        font-size:20px;
       
    }
`