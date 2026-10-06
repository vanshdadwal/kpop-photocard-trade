import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

import Register from './pages/Register'
import Login from './pages/Login'
import Catalog from './pages/Catalog'
import Collection from './pages/Collection'
import Trades from './pages/Trades'

function Home() {
  return (
    <main id="home">
      <h1>Welcome to K-Pop Photocard Collection</h1>

      <p>
        Organize your photocards, manage your wishlist,
        and keep track of your trades.
      </p>

      <button>Explore Photocards</button>
    </main>
  )
}

function App() {
  return (
    <div>
      <header>
        <h2>K-Pop Vault</h2>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/collection">My Collection</Link>
          <Link to="/trades">Trades</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/trades" element={<Trades />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App