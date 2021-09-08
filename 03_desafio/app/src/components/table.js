const Table = ({ cars }) => {
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
         { cars.length === 0 ? (
          <tr className="table-empty">
            <td colSpan="6">
              Nenhum veículo foi encontrado
            </td>
          </tr>
         ) : cars.map((car) => (
          <tr>
            <td>
              <figure className="table-image">
                <img src="https://img2.icarros.com/dbimg/imgmodelo/1/2381_6.png" alt="" />
              </figure>
            </td>
            <td>
              <div className="table-model">
                <p className="model number">Ford Fiesta</p>
                <p className="year number">2021</p>
              </div>
            </td>
            <td>
              <span className="number">ABC-1234</span>
            </td>
            <td>
              <span className="number">2019</span>
            </td>
            <td>
              <div className="table-color">
                <span></span>
              </div>
            </td>
            <td>
              <div className="table-actions">
                <button className="table-button" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </div>
            </td>
          </tr>      
         ))}
         <tr className="table-noborder">
            <td colSpan="5"></td>
            <td className="table-td__counter">
              <div className="table-counter">
                <strong className="type">Contar</strong>
                <span className="number">{ cars.length }</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table