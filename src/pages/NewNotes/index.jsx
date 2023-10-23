import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Container, Form } from "./style"

import{ FiPenTool} from "react-icons/fi"
import { Link } from "react-router-dom"

import {ButtonText} from "../../components/ButtonText"
import {TextArea} from "../../components/TextArea"
import {NoteItem} from "../../components/NoteItem"
import {Section} from "../../components/Section"
import {Button} from "../../components/Button"
import {Header} from "../../components/Header"
import {Input} from "../../components/Input"
import { api } from "../../services/api"

export const NewNotes = () =>{
    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const [notes, setNotes] = useState()
    const [description, setDescription] = useState()

    const navigate = useNavigate()

    const handleAddLinks = () =>{
        setLinks(prevValue => [...prevValue, newLink])
        setNewLink("")
    }
    
    const handleBack = () =>{
        return navigate(-1)
    }

    const handleDeleteLinks = (delet) =>{
        //Estamos pegando todos os valores passados do setLinks e estamos comparando com o componenente que foi enviado
        setLinks(preValue => preValue.filter((link) => link !== delet))    
    }

    const handleAddTags = () =>{
        setTags(prevValue => [...prevValue, newTag])
        setNewTag("")
    }

    const handleDeleteTags = (delet) =>{
        setTags(prevValue => prevValue.filter((tag) => tag !== delet))
    }

    const handleAddNewNote = async () =>{
        if(newTag){
            return alert("Um campo de Tags se encontra preenchido. Inclua em sua nota ou o esvazie")
        }

        if(newLink){
            return alert("Um campo de Links se encontra preenchido. Inclua em sua nota ou o esvazie")
        }

        if(!notes){
            return alert("Preencha o campo de Título para continuar")
        }

        try{
            await api.post("/notes", {
                notes,
                description,
                links,
                tags
            }).then(() =>{alert("Nota Foi Implementada com sucesso") 
            handleBack()
        })

            
        }catch{
            alert("Ocorreu Um Erro/ Não foi Possível Implementar a nota")
        }
    }

    return(
        <Container>
            <Header/>

            <Form>

            <header>    
                <h1>Criar Nota</h1>
              <ButtonText onClick={handleBack} title={"Voltar"}/>
            </header>
            <main>
                <Input icon={FiPenTool} placeholder={"Título"} onChange={e => setNotes(e.target.value)}/>
                <TextArea placeholder={"Observações"} onChange={e => setDescription(e.target.value)}/>

                <Section title={"Links úteis"}>


                    {
                    links.map((link, index) =>(
                        // Por algum motivo, aqui o map ta usando parênteses, pq? eu n faço ideia 
                        <NoteItem 
                        key={String(index)}
                        value={link}
                        onClick={()=>{handleDeleteLinks(link)}}
                        />
                    ))}
                  
                    <NoteItem placeholder={"Novo Link"} 
                    isNew
                    value={newLink}
                    onChange={e => setNewLink(e.target.value)}
                    onClick={handleAddLinks}
                     />
                </Section>

                <Section title={"Marcadores"}>
                    <div className="tags">

                        {tags.map((tag, index)=>(
                             <NoteItem 
                             key={index}
                             value={tag}
                             onClick={() =>{handleDeleteTags(tag)}}
                             />
                        ))}
                       
                        <NoteItem placeholder={"Nova Tag"} 
                        isNew 
                        value={newTag}
                        onChange={e => setNewTag(e.target.value)}
                        onClick={handleAddTags}
                        />

                    </div>


                </Section>
                    <Button message={"Confirmar"} onClick={handleAddNewNote}/>
            </main>
            </Form>


        </Container>


    )
}