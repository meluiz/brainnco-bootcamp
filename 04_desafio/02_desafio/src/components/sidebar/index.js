import Button from '../button'

import { Wrapper, Buttons, Content, List } from './styles'

const Sidebar = ({ articles, handleArticle }) => {
  return (
    <Wrapper>
      <Content>
        <Buttons>
          <Button kind="primary">
            Faça um upgrade
          </Button>
        </Buttons>
        <List>
          { articles && articles.map((article) => (
            <li key={article._id}>
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault()
                  handleArticle(article)
                }}
              >
                <span className="icon">{article.icon}</span>
                {article.title}
              </a>
            </li>
          ))}
        </List>
      </Content>
    </Wrapper>
  )
}

export default Sidebar