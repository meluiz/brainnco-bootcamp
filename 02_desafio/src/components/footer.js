import { H3 } from './heading'
import Text from './paragraph'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <figure className="footer-avatar">
            <img src="/meluiz-avatar.jpg" alt="Luiz Felipe" />
          </figure>
          <div>
            <H3>Luiz Felipe</H3>
            <Text>Desenvolvedor</Text>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer