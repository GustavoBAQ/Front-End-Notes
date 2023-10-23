import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
    --font-Regular: 'Roboto', sans-serif;
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialised; //Deixa a font mais suave
}

body, textarea, input, button{
    font-family: var(--font-Regular);
    font-size: 16px;
    outline: none; //Tira qualquer contorno ou sublinho da frase

} 

a {
    text-decoration: none;
}

button, a{
    cursor: pointer;
    transition:  filter 0.2s;
}

button:hover, a:hover{
    filter: brightness(0.9);
}



`