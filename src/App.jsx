import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/login'

function Home() {
  return (
    <>
      <main id="home">
        <h1>Welcome to K-Pop Photocard Collection</h1>

        <p>
          Organize your photocards, manage your wishlist,
          and keep track of your trades.
        </p>

        <button>Explore Photocards</button>
      </main>

      <section id="catalog">
        <h2>Photocard Catalog</h2>
        <p>Explore photocards from your favourite K-Pop groups.</p>
      </section>

      <section id="collection">
        <h2>My Collection</h2>
        <p>Keep track of the photocards you own.</p>
      </section>

      <section id="trades">
        <h2>Trade Ledger</h2>
        <p>Track your photocard trades and their status.</p>
      </section>
    </>
  )
}

function App() {
  return (
    <div>
      <header>
        <h2>K-Pop Vault</h2>

        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/register">Register</Link>{' '}
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App