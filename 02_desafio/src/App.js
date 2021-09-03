import Header from './components/header'
import Menu from './components/menu'
import Sidebar from './components/sidebar'
import Main from './components/main'
import Footer from './components/footer'

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="grid-area">
          <Header />
          <Menu />
          <Sidebar />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App