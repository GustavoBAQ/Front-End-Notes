import React from "react";
import { Container } from "./style";

export const Input = ({placeholder, icon: Icon, ...rest}) =>{
    return(
        <Container>
            {Icon && <Icon/>}
            <input {...rest} placeholder={placeholder}  />
        </Container>
    )
    


}