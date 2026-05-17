import { useEffect } from 'react';
import CoinCard from '../components/CoinCard';
import { coins } from '../data/mockCoins';

export default function Catalog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container">
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>The <span className="text-gold">Catalog</span></h1>
          <p className="text-muted" style={{ maxWidth: '800px' }}>
            Browse our complete collection of historical artifacts. Each piece has been authenticated by our experts and comes with a certificate of provenance.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '32px' 
        }}>
          {coins.map(coin => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </div>
      </div>
    </div>
  );
}
