import Button from "./button"

const Menu = () => {
  return (
    <nav className="menu">
      <div className="container">
        <div className="menu-content">
          <div className="menu-buttons">
            <Button>
              Change cover
            </Button>
            <Button>
              Reposition
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menu