import React from "react";

import {Container} from "./style"
import { Tags } from "../Tags";

export const Note = ({data, ...rest}) =>{
    return(
        
        <Container {...rest}>
            <h1> {data.notes} </h1>
            <footer>
                {data.notesTags && data.notesTags.map(tag => <Tags title={tag.name} key={tag.key}/>)}
            </footer>
         </Container>
        )
}