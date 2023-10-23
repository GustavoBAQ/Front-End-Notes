import React from 'react';

import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./style";
import { useAuth } from '../../hooks/auth';

import imagePlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from '../../services/api';


export const Header = () => {

    const { useLogout, user } = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : imagePlaceholder

    return (
        <Container>
            <Profile to={"/profile"}>
                <img src={avatarUrl} alt="Foto do usuário" />

                <div>
                    <span>Bem Vindo,</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={useLogout}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}