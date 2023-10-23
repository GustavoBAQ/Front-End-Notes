//PROVIDER PARA ROTAS AUTHENTICADAS
//CONTEXT PARA ROTAS NAO AUTHENTICADAS
//CONTEXTO PARA A CRIAÇÃO DE SESSOES


// Foi feito a maiorai sem auxílio, único problema mesmo foi a falta do try e catch. Se tratando que podemos receber um erro, sempre temos que utilizar essa estrutura


import { useContext, createContext } from "react";
import { api } from "../services/api";
import { useState } from "react";

const context = createContext({})

const authContext = ({ children }) => {
    const [data, setData] = useState({})

    const useInSingIn = async ({ email, password }) => {


        try {
            const response = await api.post("/session", { email, password })
            const { user, token } = response.data

            api.defaults.headers.authorizations = `Bear ${token}`
            setData({ user, token })

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Ops!! impossível de se conectar nesse momento")
            }
        }
    }
    return (

        <context.Provider value={{ useInSingIn, user: data.user }}>
            {children}
        </context.Provider>
    )
}


const useAuthContex = () => {
    const executeContex = useContext(context)

    return (executeContex)
}

export{
    authContext,
    useAuthContex
}
