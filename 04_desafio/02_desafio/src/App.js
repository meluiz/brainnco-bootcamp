import React from 'react'

import Header from './components/header'
import Menu from './components/menu'
import Sidebar from './components/sidebar'
import Main from './components/main'
import Footer from './components/footer'

import Text from './components/paragraph'
import { H2 } from './components/heading'

const App = () => {
  const articles = [
    {
      _id: 0,
      icon: '📕',
      title: 'O que é HTML?',
      content: <>
        <Text>
          Sigla para HyperText Markup Language — Linguagem de Marcação de
          Hipertexto —, o HTML é o componente base da web. Isso quer dizer que
          ele permite a construção de websites e a inserção de novos conteúdos,
          como imagens e vídeos, por meio dos hipertextos.
        </Text>

        <Text>
          Os hipertextos são a junção de vários elementos — palavras, vídeos e
          conteúdos —, que, quando conectados, estabelecem uma rede de dados que
          permite a comunicação, o armazenamento e o compartilhamento de
          informações.
        </Text>

        <Text>
          Por exemplo, ao visitar um website, você encontra diversas informações
          com formatações diferentes, como parágrafos, bullets e fontes
          distintas. Pois então, essa estruturação é realizada por meio do HTML.
        </Text>

        <H2>Qual a função do HTML?</H2>

        <Text>
          Imagine que você precisa construir um site do zero com informações da
          sua empresa. Nesse caso, você precisará conhecer a estrutura do HTML,
          criando um documento no bloco de notas e acrescentando códigos
          — tags —, que indicarão parágrafos, quebra de texto, espaçamento,
          imagens, entre outros.
        </Text>

        <Text>
          O diferencial do React é ser rápida, escalável e simples, podendo ser
          usada com outras bibliotecas ou frameworks de JavaScript, como o
          Angular JS. Essa amplitude de funcionalidades e sua forma
          descomplicada de realizar processos são os responsáveis pela
          ferramenta ser tão buscada pelos programadores.
        </Text>

        <Text>
          Criada pelo engenheiro de software, Jordan Walke, o React.js lida com
          a camada de visualização para aplicações web e móveis. A ferramenta
          permite a criação de componentes de UI reutilizáveis. 
        </Text>

        <Text>
          Assim, possibilita aos desenvolvedores criarem aplicações web, tendo a
          facilidade de alterar elementos ou os dados exibidos, sem recarregar a
          página. Por exemplo, o número de likes de uma rede social pode aumentar
          ou diminuir sem a necessidade de realizar o refresh na página. 
        </Text>

        <div className="main-reference">
          <a href="https://www.totvs.com/blog/developers/o-que-e-html/" target="_blank" rel="noreferrer">Continue lendo</a>
        </div>
      </>
    },
    {
      _id: 1,
      icon: '🎨',
      title: 'O que é CSS?',
      content: <>
        <Text>
          CSS é chamado de linguagem Cascading Style Sheet e é usado para
          estilizar elementos escritos em uma linguagem de marcação como HTML. O
          CSS separa o conteúdo da representação visual do site. Pense  na
          decoração da sua página. Utilizando o CSS é possível alterar a cor do
          texto e do fundo, fonte e espaçamento entre parágrafos. Também pode
          criar tabelas, usar variações de layouts, ajustar imagens para suas
          respectivas telas e assim por diante.
        </Text>
        
        <Text>
          CSS foi desenvolvido pelo W3C (<a href="https://www.w3.org/" target="_blank" rel="noreferrer">World Wide Web Consortium</a>) em 1996, por
          uma razão bem simples. O HTML não foi projetado para ter tags que
          ajudariam a formatar a página. Você deveria apenas escrever a
          marcação para o site.
        </Text>

        <Text>
          Tags como <i>&lt;font&gt;</i> foram introduzidas na versão 3.2 do HTML e
          causaram muitos problemas para os desenvolvedores. Como os sites
          tinham diferentes fontes, cores e estilos, era um processo longo,
          doloroso e caro para reescrever o código. Assim, o CSS foi criado
          pelo W3C para resolver este problema.
        </Text>

        <Text>
          A relação entre HTML e CSS é bem forte. Como o HTML é uma linguagem de
          marcação (o alicerce de um site) e o CSS é focado no estilo (toda a
          estética de um site), eles andam juntos.
        </Text>

        <Text>
          CSS não é tecnicamente uma necessidade, mas provavelmente você não
          gostaria de olhar para um site que usa apenas HTML, pois isso
          pareceria completamente abandonado.
        </Text>

        <H2>Vantagens do CSS</H2>

        <Text>
          A diferença entre um site que implementa CSS e outro que não o usa
          é gigantesca e notável.
        </Text>

        <Text>
          Você já deve ter visto um site que não carrega completamente ou tem um
          plano de fundo branco com texto azul e preto. Isso significa que a
          parte CSS do site não foi carregada corretamente ou não existe.
        </Text>

        <Text>
          E é assim que um site somente com HTML se parece. Acredito que você vai
          concordar comigo de que isso não é muito bonito, certo?
        </Text>

        <Text>
          Antes de usar CSS, toda a estilização tinha que ser incluída na
          marcação HTML. Isso significa que você deveria descrever separadamente
          todo o plano de fundo, as cores das fontes, os alinhamentos, etc.
        </Text>

        <Text>
          Mas o CSS permite que você estilize tudo em um arquivo diferente,
          criando assim o estilo separadamente. E, mais tarde, faça integração
          do arquivo CSS na parte superior da marcação HTML. Isso mantém a
          marcação HTML limpa e fácil de manter.
        </Text>

        <Text>
          Resumindo, com o CSS você não precisa mais escrever repetidamente como
          os elementos individuais se parecem. Isso economiza tempo, encurta o
          código e diminui a chance de erros.
        </Text>

        <Text>
          O CSS permite que você tenha vários estilos em uma página HTML,
          tornando as possibilidades de personalização quase infinitas.
          Hoje em dia, isso está se tornando mais uma necessidade do que um
          simples recurso.
        </Text>

        <div className="main-reference">
          <a href="https://www.hostinger.com.br/tutoriais/o-que-e-html-conceitos-basicos/" target="_blank" rel="noreferrer">Continue lendo</a>
        </div>
      </>
    },
    {
      _id: 2,
      icon: '🏗️',
      title: 'O que é Javascript?',
      content: <>
        <Text>
          JavaScript é uma linguagem de programação de alto nível criada, a
          princípio, para ser executada em navegadores e manipular comportamentos
          de páginas web.
        </Text>

        <Text>
          Segundo a Mozilla Foundation, atual nome da antiga Netscape
          Communications Corporations, empresa responsável pela criação do JS,
          “JavaScript é uma linguagem de programação, leve, interpretada,
          orientada a objetos, baseada em protótipos e em first-class functions
          (funções de primeira classe), mais conhecida como a linguagem de
          script da Internet.“
        </Text>

        <Text>
          JavaScript é uma linguagem de programação de alto nível criada, a
          princípio, para ser executada em navegadores e manipular comportamentos
          de páginas web.
        </Text>

        <Text>
          Com seus scripts é possível incluir, em uma página estática, elementos
          dinâmicos como mapas, formulários, operações numéricas, animações,
          infográficos interativos e muito mais.
        </Text>

        <Text>
          O JavaScript é uma das mais importantes tecnologias voltadas para o
          front-end e, unindo-se ao trio HTML, CSS e PHP, formam um grupo de
          linguagens que abrangem praticamente todas as exigências do
          desenvolvimento de uma página completa, dinâmica e com boa performance.
        </Text>

        <Text>
          Do final dos anos 90 até meados dos anos 2000, o JS ganhou grande
          popularidade ao ser utilizado por grandes empresas para a construção
          de seus sites, como o Facebook, por exemplo.
        </Text>

        <Text>
          Alguns exemplos de sites que utilizam JS em seu front e back-end hoje
          em dia são Ebay, LinkedIn e Yahoo.
        </Text>

        <Text>
          Mas o JS não se restringe mais apenas às páginas e aos navegadores,
          como foi durante vários anos: com o advento de diversos frameworks,
          APIs, melhorias e criação de centenas de funções, hoje já é possível
          utilizar JavaScript em aplicativos mobile, softwares para desktop e
          até mesmo em back-end.
        </Text>

        <div className="main-reference">
          <a href="https://kenzie.com.br/blog/javascript/" target="_blank" rel="noreferrer">Continue lendo</a>
        </div>
      </>
    },
    {
      _id: 3,
      icon: '⚛️',
      title: 'O que é React?',
      content: <>
        <Text>
          React JS é uma biblioteca JavaScript para a criação de interfaces de
          usuário — ou UI (user interface).
        </Text>

        <Text>
          Criado em 2011 pelo time do Facebook, o React surgiu com o objetivo de
          otimizar a atualização e a sincronização de atividades simultâneas no
          feed de notícias da rede social, entre eles chat, status, listagem de
          contatos e outros.
        </Text>

        <Text>
          A princípio, todas essas atividades, chamadas de estados, tinham uma
          descrição muito complexa. Com o React, esta descrição torna-se mais
          simples, bem como também é simplificada a conexão entre HTML, CSS e
          JavaScript e todos os componentes de uma página.
        </Text>

        <Text>
          Por ter demonstrado grande eficiência, nos anos que se seguiram o
          React foi incorporado à interface de outras redes sociais do grupo,
          como o Instagram e, em 2013, seu código foi aberto à comunidade, dando
          início a sua popularização.
        </Text>

        <Text>
          Hoje, o React é uma das mais prestigiadas bibliotecas de JavaScript do
          mercado.
        </Text>

        <H2>Como funciona o React?</H2>

        <Text>
          O React é uma biblioteca front-end e tem como um de seus objetivos
          facilitar a conexão entre diferentes partes de uma página, portanto
          seu funcionamento acontece através do que chamamos de componentes.
        </Text>

        <Text>
          Em outras palavras, podemos imaginar que o React divide uma tela em
          diversos componentes para, então, trabalhar sobre eles de maneira
          individual.
        </Text>

        <Text>
          Os componentes são utilizados para reaproveitamento de código e
          padronização de interface.
        </Text>

        <Text>
          Isso torna o React uma tecnologia muito flexível para a solução de
          problemas e para a construção de interfaces reutilizáveis, uma vez que
          cada um destes componentes pode ser manipulado de maneira distinta.
        </Text>

        <div className="main-reference">
          <a href="https://kenzie.com.br/blog/react/" target="_blank" rel="noreferrer">Continue lendo</a>
        </div>
      </>
    }
  ]

  const [ article, setArticle ] = React.useState(articles[0])

  const handleArticle = (article) => {
    setArticle(article)
  }

  return (
    <div className="wrapper">
      <div className="grid-area">
        <Header />
        <Menu />
        <Sidebar articles={articles} handleArticle={handleArticle} />
        <Main article={article} />
        <Footer />
      </div>
    </div>
  )
}

export default App