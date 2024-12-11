import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/">Emre</Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Menu */}
        <nav
          className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(false)} // Mobilde menüye tıklayınca kapanır
        >
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className={styles.auth}>
            <button className={styles.signIn}>Sign In</button>
            <button className={styles.signUp}>Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
