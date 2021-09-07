import Form from "./components/form"
import Table from "./components/table"

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="grid-area">
          <div className="grid-form">
            <Form />
          </div>
          <div className="grid-table">
            <Table />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App