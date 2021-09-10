import Header from './components/header'
import Menu from './components/menu'
import Sidebar from './components/sidebar'
import Main from './components/main'
import Footer from './components/footer'

import { Area, Container, Wrapper } from './theme/app'

const App = () => {
  return (
    <Wrapper>
      <Container>
        <Area>
          <Header />
          <Menu />
          <Sidebar />
          <Main />
          <Footer />
        </Area>
      </Container>
    </Wrapper>
  )
}

export default App