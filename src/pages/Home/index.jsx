import React, {useState, useEffect} from "react";

import { useNavigate } from "react-router-dom";
import {FiPlus, FiSearch} from "react-icons/fi"

import {Container, Brand, Menu, Content,Search, NewNotes} from "./style"
import {Header} from "../../components/Header"
import {Input} from "../../components/Input"
import {Note} from "../../components/Note"
import {Section} from "../../components/Section"

import {ButtonText} from "../../components/ButtonText"
import { api } from "../../services/api";
   

export const Home = () =>{
    const [tags, setTags] = useState([])
    const [tagSelected, setTagSelected] = useState([])
    
    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([])

    const navigate = useNavigate()

    const handleDetails = (id) =>{
        navigate(`details/${id}`)
    }

    const handleTagSelected = (tagName) =>{
        const VerifyTags = tagSelected.includes(tagName)
        if(VerifyTags){
            setTagSelected(prevValue => prevValue.filter(tag => tagName !== tag))
        }else{
            
            setTagSelected(prevValue => [...prevValue, tagName])
        }
    }

    useEffect(()=>{
        const handleTags = async () =>{
            const response = await api.get("/tags")
            setTags(response.data)
        }

      
        handleTags()
    },[])



    useEffect(()=>{
        const fetchNotes = async ()=>{
            const response = await api.get(`/notes?name=${search}&tags=${tagSelected}`)
            setNotes(response.data)
        }
        fetchNotes()
    }, [search, tagSelected])

    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>
            
            <Menu >
            <li><ButtonText title={"Todos"} isActive={tagSelected.length === 0}/></li>

            {tags && tags.map((tag)=>(
                <li><ButtonText key={String(tag.id)} title={tag.name} onClick={()=> {handleTagSelected(tag.name)}} isActive={tagSelected.includes(tag.name)} /></li>

            ))}


            </Menu>
            
            <Search>
            <Input icon={FiSearch} placeholder={"Pesquisar nota"} onChange={e => setSearch(e.target.value)}/>
            </Search>


            <Content to={"/details/29"}>
                <Section title={"Minhas Notas"}>
                {/* Aqui foi passado uma propriedade que recebe um objeto, no objeto é passado duas outras propriedades */}

                {console.log(notes)}
                {
                    notes.map((note)=>(
                        
                        <Note key={note.id} data={note} onClick={() => handleDetails(note.id)}/>
                        ))

                }
               

                
                </Section>

            </Content>

            <NewNotes to={"/newnotes"}>
            <FiPlus/>
            Criar Nota
            </NewNotes>


        </Container>



    )
}