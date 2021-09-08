const Table = () => {
  return (
    <div className="table-wrapper">
      <h2 className="table-title">Meus veículos</h2>
      <table className="table">
        <thead className="table-head">
          <tr>
            <th></th>
            <th>Modelo</th>
            <th>Placa</th>
            <th>Ano</th>
            <th>Cor</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody className="table-body">
         <tr className="table-empty">
            <td colSpan="6">
              Nenhum veículo foi encontrado
            </td>
         </tr>
         <tr className="table-noborder">
            <td colSpan="5"></td>
            <td className="table-td__counter">
              <div className="table-counter">
                <strong className="type">Contar</strong>
                <span className="number">0</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table