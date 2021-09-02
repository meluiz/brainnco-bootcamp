import Header from './components/header'
import Menu from './components/menu'
import Sidebar from './components/sidebar'
import Main from './components/main'
import Footer from './components/footer'

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header>
          Header
        </Header>
        <Menu>Menu</Menu>
        <Sidebar>Sidebar</Sidebar>
        <Main>Main</Main>
        <Footer>Footer</Footer>
      </div>
    </div>
  )
}

export default App