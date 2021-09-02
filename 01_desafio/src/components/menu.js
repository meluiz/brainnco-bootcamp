const Menu = ({ children }) => {
  return (
    <nav class="menu">
      <div class="box" data-label="Menu">
        { children }
      </div>
    </nav>
  )
}

export default Menu