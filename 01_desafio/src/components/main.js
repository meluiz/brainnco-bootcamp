const Main = ({ children }) => {
  return (
    <main class="main">
      <div class="box" data-label="Main">
        { children }
      </div>
    </main>
  )
}

export default Main