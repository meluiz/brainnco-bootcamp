import { H1 } from './heading'

const Main = ({ article }) => {
  return (
    <main className="main">
      <div className="container">
        <article className="main-content">
          <div className="main-header">
            <div className="main-icon">
              { article.icon }
            </div>
            <H1>{ article.title }</H1>
          </div>
          <div className="main-article">
            { article.content }
          </div>
        </article>
      </div>
    </main>
  )
}

export default Main