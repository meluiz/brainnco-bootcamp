import { H4 } from './heading'
import Text from './paragraph'

const Footer = ({ children }) => {
  return (
    <footer class="footer">
      <div class="box" data-label="Footer">
        <div class="footer-container">
          <H4>meluiz &copy; 2021</H4>
          <Text small>Todos os direitos reservados</Text>
        </div>
      </div>
    </footer>
  )
}

export default Footer