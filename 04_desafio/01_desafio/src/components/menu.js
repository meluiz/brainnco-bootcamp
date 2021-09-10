import Box from './box'
import { H1 } from './heading'
import Button from './button'

const Menu = () => {
  return (
    <nav className="menu">
      <Box label="Menu">
        <div className="menu-container">
          <H1>Brainn Co.</H1>
          <Button kind="primary">Say hello</Button>
        </div>
      </Box>
    </nav>
  )
}

export default Menu