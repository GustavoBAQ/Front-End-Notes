import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Form, Background } from "./style";
import {FiMail, FiLock} from "react-icons/fi"
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import { useAuth } from "../../hooks/auth";

export const SignIn = () => {
    const[email, setEmail] = useState("")
    const[password, setPassWord] = useState("")

    const {useSignIn} = useAuth();

    const handleSignIn = () => {
        console.log({email, password});
        useSignIn({email, password})
    }

    return(
        <Container>
        <Form  >
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar links úteis</p>
        <h2>Faça seu login</h2>

        <Input type="email" icon={FiMail} placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
        <Input type="password" icon={FiLock} placeholder="password" onChange={e => setPassWord(e.target.value)}/>

        <Button message={"Confirmar"}  onClick={handleSignIn}/>

        <Link to={"/register"}>Criar Conta</Link>
        </Form>

        <Background/>
    </Container>

)
}