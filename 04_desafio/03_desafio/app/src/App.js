import React from "react"
import Form from "./components/form"
import Table from "./components/table"

import { Container, Flexible, Wrapper } from "./theme/app"

const App = () => {

  const [ cars, setCars ] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:3333/cars')
    .then(response => response.json())
    .then((response) => {
      setCars([ ...response ])
    })
  }, [])

  return (
    <Wrapper>
      <Container>
        <Flexible>
          <Form cars={cars} setCars={setCars} />
          <Table cars={cars} setCars={setCars} />
        </Flexible>
      </Container>
    </Wrapper>
  )
}

export default App