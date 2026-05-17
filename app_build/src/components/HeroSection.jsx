import { Link } from 'react-router-dom';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content animate-fade-in">
        <h1 className="hero-title">
          Own a Piece of <span className="text-gold">History</span>
        </h1>
        <p className="hero-subtitle text-muted delay-100 animate-fade-in">
          Discover our curated collection of ancient and rare coins. From the Roman Empire to Ancient Greece, find the perfect addition to your collection.
        </p>
        <div className="hero-actions delay-200 animate-fade-in">
          <Link to="/catalog" className="btn-primary">Explore Catalog</Link>
          <Link to="/about" className="btn-secondary">Our Story</Link>
        </div>
      </div>
    </div>
  );
}
