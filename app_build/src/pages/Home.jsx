import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import CoinCard from '../components/CoinCard';
import { coins } from '../data/mockCoins';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredCoins = coins.slice(0, 3);

  return (
    <div className="page">
      <HeroSection />
      
      <section className="featured-section container" style={{ padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Featured <span className="text-gold">Antiquities</span></h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            A selection of our most exquisite and historically significant pieces, currently available for acquisition.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '32px' 
        }}>
          {featuredCoins.map(coin => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </div>
      </section>
    </div>
  );
}
