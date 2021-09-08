import React from "react"
import Form from "./components/form"
import Table from "./components/table"

const App = () => {

  const [ cars, setCars ] = React.useState([])

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