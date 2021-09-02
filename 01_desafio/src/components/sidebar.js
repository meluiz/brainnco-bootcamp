import Box from './box'

import { H4, H5 } from './heading'
import Button from './button'
import Image from './image'
import Text from './paragraph'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Box label="Sidebar">
        <div className="sidebar-container">
          <div className="sidebar-sticky">
            <div className="sidebar-info">
              <H4>Criatividade</H4>
              <Text small>Esse conteúdo mostra o poder do React.</Text>
              <Button kind="secondary">
                Feedback
              </Button>
            </div>
            <div className="sidebar-user">
              <Image src="/meluiz-avatar.jpg" alt="Avatar luiz" />
              <div className="sidebar-user__info">
                <H5>Luiz Felipe</H5>
                <Text small>Desenvolvedor Web</Text>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </aside>
  )
}

export default Sidebar