import { Link } from 'react-router-dom';
import { Coins, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-glass">
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand">
          <Coins className="brand-icon text-gold" size={32} />
          <span className="brand-text">Aureus Antiquities</span>
        </Link>
        
        <div className="navbar-links desktop-only">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/catalog" className="nav-link">Catalog</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link btn-secondary">Contact Us</Link>
        </div>

        <button 
          className="mobile-menu-btn mobile-only text-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu bg-glass animate-fade-in">
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/catalog" className="nav-link" onClick={() => setIsOpen(false)}>Catalog</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="nav-link text-gold" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
