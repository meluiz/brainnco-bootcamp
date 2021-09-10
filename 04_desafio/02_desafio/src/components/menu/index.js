import Button from '../button'

import { Container } from '../../theme/app'
import { Wrapper, Content, Buttons } from './styles'

const Menu = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Buttons>
            <Button>
              Change cover
            </Button>
            <Button>
              Reposition
            </Button>
          </Buttons>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Menu