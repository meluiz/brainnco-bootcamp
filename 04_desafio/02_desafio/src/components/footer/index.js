import { H3 } from '../heading'
import Text from '../paragraph'

import { Container } from '../../theme/app'
import { Avatar, Content, Wrapper } from './styles'

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Avatar>
            <img src="/meluiz-avatar.jpg" alt="Luiz Felipe" />
          </Avatar>
          <div>
            <H3>Luiz Felipe</H3>
            <Text>Desenvolvedor</Text>
          </div>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Footer