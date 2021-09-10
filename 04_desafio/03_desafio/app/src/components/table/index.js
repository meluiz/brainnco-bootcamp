import {
  TableBody,
  TableHead,
  TableEmpty,
  TableWrapper,
  Title, Wrapper,
  TableImage,
  TableModel,
  TableColor,
  SpanNumber,
  TableActions,
  TableButton,
  TableCounter
} from "./styled"

const Table = ({ cars, setCars }) => {

  const handleDeleteCar = (event, plate) => {
    fetch ('http://localhost:3333/cars', {
      method: 'delete',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ plate })
    })
    .then(response => response.json())
    .then(() => {
      const findIndex = cars.findIndex((car) => car.plate === plate)
      if (findIndex !== -1) {
        setCars((prevState) => {
          prevState.splice(findIndex, 1)
          return [ ...prevState ]
        })
      }
    })
  }

  return (
    <Wrapper>
      <Title>Meus veículos</Title>
      <TableWrapper>
        <TableHead>
          <tr>
            <th></th>
            <th>Modelo</th>
            <th>Placa</th>
            <th>Ano</th>
            <th>Cor</th>
            <th>Ação</th>
          </tr>
        </TableHead>
        <TableBody>
         { cars.length === 0 ? (
          <tr>
            <td></td>
            <TableEmpty colSpan="5" style={{ textAlign: 'center' }}>Nenhum veículo foi encontrado</TableEmpty>
          </tr>
         ) : cars.map((car) => (
          <tr key={car.plate}>
            <td>
              <TableImage>
                <img src={car.image} alt={car.brandModel} />
              </TableImage>
            </td>
            <td>
              <TableModel>
                <p>{car.brandModel}</p>
                <p>{car.year}</p>
              </TableModel>
            </td>
            <td>
              <SpanNumber>{car.plate}</SpanNumber>
            </td>
            <td>
              <SpanNumber>{car.year}</SpanNumber>
            </td>
            <td>
              <TableColor>
                <span style={{
                  backgroundColor: car.color
                }}></span>
              </TableColor>
            </td>
            <td>
              <TableActions>
                <TableButton
                  type="button"
                  onClick={(event) => handleDeleteCar(event, car.plate)}
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </TableButton>
              </TableActions>
            </td>
          </tr>      
         ))}
         <tr>
            <td colSpan="5"></td>
            <TableCounter>
              <div>
                <strong>Contar</strong>
                <span>{ cars.length }</span>
              </div>
            </TableCounter>
          </tr>
        </TableBody>
      </TableWrapper>
    </Wrapper>
  )
}

export default Table