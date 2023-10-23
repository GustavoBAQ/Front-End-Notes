import React from "react";

import { Container } from "./style";

export const ButtonText = ({title,isActive = false, ...rest}) =>{
    return(
        <Container 
        type="button"
        isActive ={isActive} //Muita atenção, a propriedade tem que receber o valor 
        {...rest}>
            {title}            
        </Container>
    )
}