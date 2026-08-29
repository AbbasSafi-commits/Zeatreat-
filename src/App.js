import React from 'react';
import Navigation from './components/Navigation';
import './index.css';

export default function App() {
  return (
    <div>
      <Navigation />

      <main>
        <section className="section-padding text-center" style={{backgroundColor: 'var(--warm-cream)'}}>
          <div className="container">
            <h1 className="text-green">ZEETREAT Herbal Hair Oil</h1>
            <p style={{maxWidth: 720, margin: '0.5rem auto 1.5rem', color: 'var(--text-light)'}}>
              Premium herbal hair oil that strengthens roots, reduces hair fall, and nourishes the scalp. 100% herbal, paraben-free, and mineral-oil free.
            </p>
            <div>
              <a className="btn btn-primary" href="#buy">Buy Now</a>
              <a className="btn btn-whatsapp" href="https://wa.me/?text=I'm%20interested%20in%20ZEETREAT%20Herbal%20Hair%20Oil" style={{marginLeft: 12}}>WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <h2 className="text-center">Why ZEETREAT?</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, marginTop: 24}}>
              <div style={{padding: 16, borderRadius: 8, background: 'white', boxShadow: '0 4px 12px rgba(0,0,0,0.04)'}}>
                <h3 className="text-green">100% Herbal</h3>
                <p>Natural botanicals traditionally used to nourish hair and scalp.</p>
              </div>
              <div style={{padding: 16, borderRadius: 8, background: 'white', boxShadow: '0 4px 12px rgba(0,0,0,0.04)'}}>
                <h3 className="text-green">Strengthens Roots</h3>
                <p>Formulation to support healthy follicles and reduce breakage.</p>
              </div>
              <div style={{padding: 16, borderRadius: 8, background: 'white', boxShadow: '0 4px 12px rgba(0,0,0,0.04)'}}>
                <h3 className="text-green">Paraben & Mineral Oil Free</h3>
                <p>Gentle on scalp and suitable for regular use.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="buy" className="section-padding text-center" style={{backgroundColor: 'var(--light-gray)'}}>
          <div className="container">
            <h2>Order</h2>
            <p style={{color: 'var(--text-light)'}}>Cash on Delivery available. Delivery in 3-7 business days.</p>
            <a className="btn btn-primary" href="#" style={{marginTop: 12}}>Place Order</a>
          </div>
        </section>
      </main>

      <footer style={{padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--light-gray)'}}>
        <div className="container">
          <p style={{color: 'var(--text-light)'}}>© {new Date().getFullYear()} ZEETREAT Naturals</p>
        </div>
      </footer>
    </div>
  );
}
