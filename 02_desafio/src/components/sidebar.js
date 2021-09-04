import Button from './button'

const Sidebar = ({ articles, handleArticle }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-buttons">
          <Button kind="primary">
            Faça um upgrade
          </Button>
        </div>
        <ul className="sidebar-list">
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
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar