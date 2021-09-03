const Sidebar = ({ articles, handleArticle }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <ul className="sidebar-list">
          { articles && articles.map((article) => (
            <li key={article._id}>
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault()
                  handleArticle(article.icon, article.title, article.content)
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