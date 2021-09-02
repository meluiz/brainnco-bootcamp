const Sidebar = ({ children }) => {
  return (
    <aside class="sidebar">
      <div className="box" data-label="Sidebar">
        { children }
      </div>
    </aside>
  )
}

export default Sidebar