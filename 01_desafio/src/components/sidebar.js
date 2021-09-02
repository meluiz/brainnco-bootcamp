const Sidebar = ({ children }) => {
  return (
    <aside className="sidebar">
      <div className="box" data-label="Sidebar">
        { children }
      </div>
    </aside>
  )
}

export default Sidebar