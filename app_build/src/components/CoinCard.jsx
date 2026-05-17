import { Link } from 'react-router-dom';
import './CoinCard.css';

export default function CoinCard({ coin }) {
  return (
    <div className="coin-card bg-glass animate-fade-in">
      <div className="coin-image-wrapper">
        <img src={coin.image} alt={coin.name} className="coin-image" loading="lazy" />
        <div className="coin-price-tag">{coin.price}</div>
      </div>
      
      <div className="coin-content">
        <h3 className="coin-title">{coin.name}</h3>
        <p className="coin-era text-gold">{coin.era}</p>
        
        <div className="coin-details-grid text-muted">
          <div className="detail-item">
            <span className="detail-label">Condition:</span>
            <span>{coin.condition}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Metal:</span>
            <span>{coin.metal}</span>
          </div>
        </div>

        <Link to={`/coin/${coin.id}`} className="btn-secondary btn-block text-center mt-4">
          View Details
        </Link>
      </div>
    </div>
  );
}
