import { H1 } from './heading'

const Main = ({ icon, title, content }) => {
  return (
    <main className="main">
      <div className="container">
        <article className="main-content">
          <div className="main-header">
            <div className="main-icon">
              { icon }
            </div>
            <H1>{ title }</H1>
          </div>
          <div className="main-article">
            { content }
          </div>
        </article>
      </div>
    </main>
  )
}

export default Main