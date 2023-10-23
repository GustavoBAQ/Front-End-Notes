import React from "react";

import { Container } from "./style";

//Criando componente button
//loading é caso se o botão for apertado
//message é o texto que irá vir da página em que o componente for utilizado
//...rest é os outros dados que o componente irá receber (id, name, key e etc...)
export const Button = ({message, loading= false, ...rest}) =>{
    //rest significa resto, ele compõe outras propriedades não definidas que não estão sendo manipuladas, como o id e o name

    return(
        <Container
        type="button"
        disabled={loading}
        {...rest}>
            {loading?  "carregando..." : message}
        </Container>
    )
}