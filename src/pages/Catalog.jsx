function Catalog() {
  return (
    <div className="page">
      <h1>Photocard Catalog</h1>
      <p>Explore K-Pop photocards.</p>

      <div className="catalog-grid">
        <div className="card">
          <h2>BTS</h2>
          <p>Photocard collection</p>
          <button>View Cards</button>
        </div>

        <div className="card">
          <h2>BLACKPINK</h2>
          <p>Photocard collection</p>
          <button>View Cards</button>
        </div>

        <div className="card">
          <h2>Stray Kids</h2>
          <p>Photocard collection</p>
          <button>View Cards</button>
        </div>
      </div>
    </div>
  )
}

export default Catalog