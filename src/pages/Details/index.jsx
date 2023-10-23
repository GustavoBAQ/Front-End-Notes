import React, { useEffect, useState } from 'react';

import { Container, Links, Content } from "./style";
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tags } from '../../components/Tags';
import { ButtonText } from '../../components/ButtonText';
import { api } from '../../services/api';

export function Details() {

  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  const handleBack =() =>{
    return navigate(-1)
  }

  const handleRemove = async () =>{
    const confirm = window.confirm("Deseja Excluir a Nota?")

    if(confirm){
      await api.delete(`/notes/${params.id}`)
      return navigate(-1)
    }
  }

  useEffect(()=>{
    const fetchNote = async () =>{
      const response = await api.get(`notes/${params.id}`)
      setData(response.data)
    }
    
    fetchNote()
    
  },[])
  
  console.log(data);
  return (
    <Container>
      <Header />

    { data &&
      <main>
        <Content>

          <ButtonText title={"excluir nota"} onClick={handleRemove}/>

          <h1>{data.notes}</h1>

          <p>          
            {data.description? data.description : "<Sem descrição>"}
          </p>


          
         { data.links &&
         <Section title={"Links Úteis"}>

            <Links>
             {data.links.map(link =>(
               <li key={link.id}><a target='_blank' href={link.url}>{link.url}</a></li>
             ))}
             
            </Links>
          </Section>
        }

        { data.tags &&
          <Section title={"Marcadores"}>
            {data.tags.map(tag =>(
              <Tags key={tag.id} title={tag.name} />

            
            ))}
       
          </Section>}

          <Button message="Voltar" onClick={handleBack}/>
        </Content>
      </main>}
    </Container>
  )

}

