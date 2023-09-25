import React from 'react';
import '../css/home.css'
import { Link } from 'react-router-dom';

function Home() {

   

    


  return (
    <div className="homepage">
      
      <section className="hero image">
        <div className="hero-content">
          <h1>Welcome to Multi-Bag Deliveries</h1>
          <p>Track your parcels and schedule deliveries with ease.</p>
          <Link to="login" className="cta-button">Get Started</Link>
        </div>
      </section>

      
      <footer className="footer">
        <p>&copy; 2023 Multi-Bag Deliveries</p>
      </footer>
    </div>
  );
}

export default Home;
