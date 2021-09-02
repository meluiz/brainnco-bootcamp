const Header = ({ children }) => {
  return (
    <header class="header">
      <div className="box" data-label="header">
        { children }
      </div>
    </header>
  )
}

export default Header