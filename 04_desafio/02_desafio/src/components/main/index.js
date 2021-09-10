import { H1 } from '../heading'

import { Container } from '../../theme/app'
import { Article, Content, Header, Icon, Wrapper } from './styles'

const Main = ({ article }) => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Header>
            <Icon>
              { article.icon }
            </Icon>
            <H1>{ article.title }</H1>
          </Header>
          <Article>
            { article.content }
          </Article>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Main