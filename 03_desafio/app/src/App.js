import Form from "./components/form"
import Table from "./components/table"

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="flexible">
          <Form />
          <Table />
        </div>
      </div>
    </div>
  )
}

export default App