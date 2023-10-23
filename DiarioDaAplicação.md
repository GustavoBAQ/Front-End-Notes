## 1 - Primeiros passos
    O começo da interface frontend foi marcada pelo CSS, começamos introduzindo a parte teórica do CSS in JS

## 2 - CSS in JS
    Css in JS é um conceito no qual se aplica a construção do css em um arquivo JS. Para existir essa construção é necessário a instalação de uma biblioteca chamada "styled-components", como o nome já diz, ela conciste em aplicar estilo em componentes

    NPM: 

    npm install styled-components --save

## 3 - Styled Components 
    O Styled é uma biblioteca voltada a criação de componentes de costumização que são utilizados dentro do JS

    Construção:

    import {styled} from "styled-components"


    const Container = styled.div`
        background-color: red
    `

## 4 - Construção de um Componente
    Um componente recebe uma estrutura onde se apresenta o index.jsx e o style.js

        - No index.jsx ficará a estrutura do componente e os dados para a manipulação
        - O style.js ficará responsável em organizar e criar os estilos em forma de componentes para estruturar o index


        Criação de um componente do index:

        import {Container} from "./style.js

        export const Button = ({title, ...rest}) =>{
            return(
                <Container {...rest}>
                    {title}
                
                </Container>

            )
        }

        NOTAS:

        - Container é um componente de estilização criado no style.js, normalmente utilizamos o nome Container como nome padrão para o componente que englobará todo o código

        - title é uma propriedade vinda de uma página que está renderizando o componente Button

        - ...rest é uma propriedade que engloba todas as outras que não possuem necessidade de ser expecifícada no componente, como por exemplo : id, name, key e etc..


## 5 - Tema e Estilização Global

        A Estiliozação Global consiste em uma estilização que irá afetar todos os arquivos do código. Será criada uma   pasta styles que irá compor todos os styles globais

        TEMA:
            O tema global consiste em um arquivo js que abriga um objeto que possui uma unidade chamada COLORS, esse    objeto será responsaveis pelas cores da aplicação. Dentro de COLORS terá um objeto agrupando todas as  cores que serão utilizadas

            Após definir o arquivo de tema, no arquivo "main" será importando o arquivo {ThemeProvider} e o theme   vindo do arquivo theme na pasta de estilização global.
            O arquivo "ThemeProvider" irá englobar todas as rotas encontradas no main e tera uma propriedade theme =    {theme} que irá receber o theme de styles


            <React.StrictMode>
                <ThemeProvider theme={theme}>
                    </Details>
                </ThemeProvider>
            </React.StrictMode>

            ESTILIZAÇÃO GLOBAL:
                A estilização global se trata de um arquivo que ficará responsavel em formatar em um padrão todos os    arquivos que possuem as mesmas características

                ex:

                - page Details e page About, possuem o mesmo tom de background, com a estilização global eles recebem   as cores de uma forma uníca sem a necessidade de modificar em seus exclusivos arquivos css

                Para que as medidas sejam concluidas é necessário importar e definir a função da estilização global     no main entre o componente theme, para que o arquivo da estilização global consiga usar os atributos    do theme


##  6- Childrens
            Os childrens podem ser interpretados como propriedades, porém eles não são passados como as propriedades convencionais, eles são passados dentro do componente 



            <Section title="Marcadores">
                <ul>
                    <li> Marcador 1 </li>
                </ul>
            </Section>
            

            title é passado como uma propriedade comum, mas o children que é o conteúdo do componente está sendo passado por dentro

##  7 - Estuturação da página

    A página segue um estilo de estruturação no qual é formado pelo HEADER e CONTENT.
    Header ficará responsavel pelo elemento header do site.
    Content ficará responsável pelo conteúdo.

    A construção do header geralmente é formado pelo componente Header.
    A construção do Content segue uma linha: 
    
    - main: Ficará responsavel pela lagura da página inteira, assim tomando conta do "grid-area: content"
    
    - Content: Estrutura que se encontra dentro do main, ele se responsabiliza pelo conteudo, nele é feito a largura que os componentes vão atingir "max-width" e definará um "margin: 0 auto;" para que o conteúdo fique centralizado na página 

##  8 - Criando o HOME (Estruturação de página)

    Estruturas para criar uma página (Exemplo de RocketNotes):

    - Conteiner: Geralmente abriga todos os componentes da página
    - Brand: Local da logo
    - Menu: Menu lateral
    - Search: aréa de pesquisa
    - Content: Onde alojará o conteúdo
    - New: Onde criará novos elementos


##  9 - Criando propriedade de componente que recebe objeto

    É possível passar uma propriedade que recebe um objeto para um componente e utilizar os objetos internos como propriedade 

    CONSTRUÇÃO (ex: Home utilizando Notes):


    <Notes data={{
        title: "Minha Nota",
        tag:[
            {key:"1", title:"Tag1"},
            {key:"2", title:"Tag2"}
        ]
    }}/>

    Dentro de note:

    O conteúdo pode ser acessado por meio da propriedade data

    export const Notes = ({data, ...rest}) =>{
        return(
            <Container {...rest}>
            {data.title}

            {data.tag && data.tag.map(tag => <Tags key={tag.key} title={tag.title}/>)}

            </Container>
        )
    }


    data está recebendo algum conteúdo dentro do vetor tag ? Se estiver renderize o componente <Tags/> de acordo com a quantidade de elementos dentro do vetor tag


##  10 - Diferença do max-width do Profile e o padding do SingIn

    No SingIn o formulario acaba ocupando somente o necessário para seus itens.
    


## 11 - Difículdades até agora

    O maior dilema que estamos enfrentando ultimamente é a variação da utilização de altura e largura




    