import { H1 } from './heading'
import Button from './button'

const Menu = () => {
  return (
    <nav class="menu">
      <div class="box" data-label="Menu">
        <div class="menu-container">
          <H1>Brainn Co.</H1>
          <Button kind="primary">Say hello</Button>
        </div>
      </div>
    </nav>
  )
}

export default Menu