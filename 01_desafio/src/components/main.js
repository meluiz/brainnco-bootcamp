const Main = ({ children }) => {
  return (
    <main className="main">
      <div className="box" data-label="Main">
        { children }
      </div>
    </main>
  )
}

export default Main