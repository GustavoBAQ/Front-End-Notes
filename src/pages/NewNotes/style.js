import styled from "styled-components";

export const Container = styled.div`    
    height: 100vh;
    width: 100%;
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    >main{
        grid-template-areas: "content";
        overflow-y: auto;
    }

    .tags{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        
        
    }

`


export const Form = styled.form`
    margin: 36px auto;
    width: 550px;
    
    >header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px ;

        a{
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    }

`