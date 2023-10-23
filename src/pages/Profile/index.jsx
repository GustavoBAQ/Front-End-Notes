import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi"
import {Container, Form, Avatar} from "./style"
import {Button} from "../../components/Button"
import {Input} from "../../components/Input"
import {useAuth} from "../../hooks/auth"

import imagePlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api"

export const Profile = () =>{
    
    const {user, updateProfile} = useAuth()
    
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` :  imagePlaceholder
    const [avatarProfile, setAvatarProfile] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    const navigate = useNavigate()

    const handleBack = () =>{
        return navigate(-1)
    } 

    const handleUpdateAvatar = (event) =>{
        const file = event.target.files[0];
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file);
        setAvatarProfile(imagePreview)
    }


    const handleUpdate = async ()=>{
        const update = {
            name,
	        email: email,
	        password: passwordNew,
	        old_password: passwordOld            
        }

        const implementData = Object.assign(user, update)
        console.log(implementData);

        await updateProfile({user: implementData, avatarFile})
    }

   

    return(
        <Container>
            <header>
                <button type="button" onClick={handleBack}>
                <FiArrowLeft/>
                </button>
                
            </header>

            <Avatar>
                <img src={avatarProfile} alt="foto do usuário" />
                <label htmlFor="avatar">

                <FiCamera onClick={() =>{document.getElementById("inputFile").click()}}/>
                <input type="file" id="inputFile" onChange={handleUpdateAvatar}/>
                </label>
            </Avatar>


            <Form>
            <Input type={"text"} placeholder={"Nome"} icon={FiUser} value={name} onChange={e => setName(e.target.value)}/>
            <Input type={"email"} placeholder={"E-mail"} icon={FiMail} value={email} onChange={e => setEmail(e.target.value)}/>
            <Input type={"password"} placeholder={"Senha Atual"} icon={FiLock} onChange={e => setPasswordOld(e.target.value)}/>
            <Input type={"password"} placeholder={"Nova Senha"} icon={FiLock} onChange={e => setPasswordNew(e.target.value)}/>
            <Button message={"Salvar"} onClick={handleUpdate}/>
            </Form>

        </Container>

    )
}