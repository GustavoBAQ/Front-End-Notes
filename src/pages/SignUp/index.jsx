import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

import { Container, Form, Background } from "./style";
import {FiMail, FiLock, FiUser} from "react-icons/fi"
import {Button} from "../../components/Button";
import {Input} from "../../components/Input";

import {api} from "../../services/api";



export const SignUp = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    
    const handleSingUp = () =>{
        console.log(name, email, password);

        if(!name || !email || !password){
            return alert("Preencha todos os campos")
        }
        
        api.post("/users", {name, email, password})
        .then(() =>{ alert("Usuário foi implementado com sucesso")})
        .catch(error =>{
            if(error.reponse){
                return alert(error.reponse.data.menssage)
            }else{
                return alert("Ops! Algo deu errado em seu login, tente novamente mais tarde")
            }
        })
    
       


    
        return navigate("/")
    }

    return(
        <Container>
            <Background/>
        <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar links úteis</p>
        <h2>Faça seu login</h2>

        <Input type="text" icon={FiUser} placeholder="Nome"  onChange={e => setName(e.target.value)}/>
        <Input type="email" icon={FiMail} placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
        <Input type="password" icon={FiLock} placeholder="password" onChange={e => setPassword(e.target.value)}/>

        <Button message={"Confirmar"} onClick={handleSingUp}/>

        <Link to={"/"}>Voltar para o Login</Link>
        </Form>

    </Container>

)
}