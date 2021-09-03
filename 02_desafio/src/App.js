import Header from './components/header'
import Menu from './components/menu'
import Sidebar from './components/sidebar'
import Main from './components/main'
import Footer from './components/footer'

const App = () => {
  const articles = [
    {
      _id: 0,
      icon: '📕',
      title: 'O que é JavaScript?',
      content: <>
        <Text>
          JavaScript é uma linguagem de programação que permite a você
          implementar itens complexos em páginas web — toda vez que uma página
          da web faz mais do que simplesmente mostrar a você informação estática
          — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas
          interativos ou gráficos 2D/3D animados, etc. — você pode apostar que
          o JavaScript provavelmente está envolvido. É a terceira camada do
          bolo das tecnologias padrões da web, duas das quais (HTML e CSS) nós
          falamos com muito mais detalhes em outras partes da Área de
          Aprendizado.
        </Text>
      </>
    },
    {
      _id: 1,
      icon: '❤️',
      title: 'O que é React?',
      content: <>
        <Text>
          O React é a biblioteca mais popular do JavaScript e é usada para
          construir uma interface de usuário (IU). Ela oferece uma resposta
          excelente para o usuário adicionar comandos usando um novo método
          de renderizar sites.
        </Text>
        
        <Text>
          Os componentes dessa ferramenta foram desenvolvidos pelo Facebook.
          Ela foi lançada em 2013 como uma ferramenta JavaScript de código
          aberto. Atualmente, ela permanece na frente das suas principais
          competidoras, como a Angular e a Bootstrap, as duas bibliotecas
          JavaScript mais bem vendidas.  
        </Text>
      </>
    }
  ]

  const [ icon, setIcon ] = React.useState(articles[0].icon)
  const [ title, setTitle ] = React.useState(articles[0].title)
  const [ content, setContent ] = React.useState(articles[0].content)

  const handleArticle = (icon, title, content) => {
    setIcon(icon)
    setTitle(title)
    setContent(content)
  }

  return (
    <div className="wrapper">
      <div className="grid-area">
        <Header />
        <Menu />
        <Sidebar />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App