import Box from '../box'
import { H4 } from '../heading'
import Text from '../paragraph'

import { Container, Wrapper } from './styles'

const Footer = () => {
  return (
    <Wrapper>
      <Box label="Footer">
        <Container>
          <H4>meluiz &copy; 2021</H4>
          <Text small>Todos os direitos reservados</Text>
        </Container>
      </Box>
    </Wrapper>
  )
}

export default Footer