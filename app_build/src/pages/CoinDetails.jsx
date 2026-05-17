import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Clock, Weight, Sparkles } from 'lucide-react';
import { coins } from '../data/mockCoins';
import './CoinDetails.css';

export default function CoinDetails() {
  const { id } = useParams();
  const coin = coins.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!coin) {
    return (
      <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h2>Artifact not found</h2>
        <Link to="/catalog" className="text-gold" style={{ marginTop: '20px', display: 'inline-block' }}>
          Return to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="page coin-details-page">
      <div className="container">
        <Link to="/catalog" className="back-link text-muted">
          <ArrowLeft size={20} /> Back to Catalog
        </Link>
        
        <div className="coin-details-grid">
          <div className="coin-details-image-wrapper">
            <img src={coin.image} alt={coin.name} className="coin-details-image" />
          </div>
          
          <div className="coin-details-content">
            <div className="era-badge text-gold">{coin.era}</div>
            <h1 className="details-title">{coin.name}</h1>
            <div className="details-price">{coin.price}</div>
            
            <p className="details-description text-muted">{coin.description}</p>
            
            <div className="specs-grid">
              <div className="spec-item">
                <Sparkles className="spec-icon text-gold" size={20} />
                <div>
                  <div className="spec-label">Condition</div>
                  <div className="spec-value">{coin.condition}</div>
                </div>
              </div>
              <div className="spec-item">
                <ShieldCheck className="spec-icon text-gold" size={20} />
                <div>
                  <div className="spec-label">Metal</div>
                  <div className="spec-value">{coin.metal}</div>
                </div>
              </div>
              <div className="spec-item">
                <Weight className="spec-icon text-gold" size={20} />
                <div>
                  <div className="spec-label">Weight</div>
                  <div className="spec-value">{coin.weight}</div>
                </div>
              </div>
              <div className="spec-item">
                <Clock className="spec-icon text-gold" size={20} />
                <div>
                  <div className="spec-label">Authentication</div>
                  <div className="spec-value">Certified Authentic</div>
                </div>
              </div>
            </div>
            
            <div className="action-buttons">
              <button className="btn-primary btn-large">Inquire to Purchase</button>
              <button className="btn-secondary btn-large">Make an Offer</button>
            </div>
            
            <div className="guarantee-text text-muted">
              <ShieldCheck size={16} />
              <span>All antiquities are guaranteed authentic and come with a certificate of provenance.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
