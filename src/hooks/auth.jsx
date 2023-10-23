import { useContext, createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import React from "react";

const authContext = createContext({})

//Por algum motivo foi pedido para usar o PascalCase
//Criação de contexto para auxiliar a aplicação
const AuthProvider = ({children}) =>{
    const [data, setData] = useState({})

    //Função criada com o objetivo de criar seções para clientes authorizados 
    const useSignIn =  async ({email, password}) =>{
        /*
          Nessa função, sera resgatado as informações de campos na pagina SignIn e serão enviadas ao back-end, onde verificará se o usuario existe
          Se o usuaário existir será criada enviada uma resposta onde regataremos as informações do usuário juntamente com o token
          O token será implementado no authorization do header e simulará o padrão do Bear authorization do Insominia, onde o back end requisita desse modo
        */
        try{
            const response = await api.post("/session", {email, password})
            const {user, token} = response.data

            localStorage.setItem("@rocketNotes:user", JSON.stringify(user))
            localStorage.setItem("@rocketNotes:token", token)            

            api.defaults.headers.common["Authorization"] = `Bear ${token}`

            setData({user, token})
            //Erro foi não definir o data aq
            
            
        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Impossível criar sessão")
            }
        }
        
    }

    const useLogout = () =>{

         localStorage.removeItem("@rocketNotes:user")
         localStorage.removeItem("@rocketNotes:token")
         setData({})
    }

    const updateProfile = async ({user, avatarFile}) =>{

        try{

            if(avatarFile){
                //Formatando a variavel para trabalhar como arquivo de formulário
                const fileFormt = new FormData()
                //Adicionando dentro do arquivo o avatarFile
                fileFormt.append("avatar", avatarFile)

                //Enviando para o back-end trabalhar
                const response = await api.patch("/users/avatar", fileFormt)

                //enviando ao user que esta vindo
                user.avatar = response.data.avatar

            }

            api.put("/users", user).then(() =>{alert("Perfil Atualizado")})

            localStorage.setItem("@rocketNotes:user", JSON.stringify(user))

            setData({user, token:data.token})


        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível alterar as configurações do usuário")
            }
        }



    }
    
    useEffect(()=>{
        const user = localStorage.getItem("@rocketNotes:user")
        const token = localStorage.getItem("@rocketNotes:token")
        
        if(user && token){

            
            api.defaults.headers.common["Authorization"] = `Bear ${token}`            
            
            setData({token, user: JSON.parse(user)})


        }


        
    }, [])

   
    return(
        
    //Retorno do contexto, onde proverá as informações que queremos compartilhar | Essa função foi feita com intuito de simplificar a códifo
    <authContext.Provider value={{useLogout ,useSignIn, updateProfile,user: data.user}}>
        {/* children representa as rotas que o sistema irá prover as informações acima */}
        {children}
    </authContext.Provider>
    )
}

//função que servirá como contexto as rotas de SignIn e SignUp que não estão ligadas as rotas authorizadas, já que as mesmas não precisam de autorização para o acesso
const useAuth = () =>{
    const context = useContext(authContext)
    
    return context
}

export {
    AuthProvider,
    useAuth
}