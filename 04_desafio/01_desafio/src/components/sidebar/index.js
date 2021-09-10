import Box from '../box'
import { H4, H5 } from '../heading'
import Button from '../button'
import Image from '../image'
import Text from '../paragraph'

import { Container, Info, Sticky, User, Wrapper } from './styles'

const Sidebar = () => {
  return (
    <Wrapper>
      <Box label="Sidebar">
        <Container>
          <Sticky>
            <Info className="sidebar-info">
              <H4>Criatividade</H4>
              <Text small>Esse conteúdo mostra o poder do React.</Text>
              <Button kind="secondary">
                Feedback
              </Button>
            </Info>
            <User>
              <Image src="/meluiz-avatar.jpg" alt="Avatar luiz" />
              <div>
                <H5>Luiz Felipe</H5>
                <Text small>Desenvolvedor Web</Text>
              </div>
            </User>
          </Sticky>
        </Container>
      </Box>
    </Wrapper>
  )
}

export default Sidebar