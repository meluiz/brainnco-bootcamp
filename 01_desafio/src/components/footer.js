import { H4 } from './heading'
import Text from './paragraph'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="box" data-label="Footer">
        <div className="footer-container">
          <H4>meluiz &copy; 2021</H4>
          <Text small>Todos os direitos reservados</Text>
        </div>
      </div>
    </footer>
  )
}

export default Footer