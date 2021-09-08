import React from "react"
import Form from "./components/form"
import Table from "./components/table"

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
    <div className="wrapper">
      <div className="container">
        <div className="flexible">
          <Form cars={cars} setCars={setCars} />
          <Table cars={cars} setCars={setCars} />
        </div>
      </div>
    </div>
  )
}

export default App