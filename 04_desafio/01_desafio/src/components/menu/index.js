import Box from '../box'
import { H1 } from '../heading'
import Button from '../button'

import { Container, Wrapper } from './styles'

const Menu = () => {
  return (
    <Wrapper>
      <Box label="Menu">
        <Container>
          <H1>Brainn Co.</H1>
          <Button kind="primary">Say hello</Button>
        </Container>
      </Box>
    </Wrapper>
  )
}

export default Menu