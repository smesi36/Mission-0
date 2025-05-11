import styles from "./Navbar.module.css";
import { useState } from "react";

export default function NavBar() {
  // Controls hamburger menu on/off
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = function () {
    setMenuIsOpen((prevMenuIsOpen) => !prevMenuIsOpen);
  };

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.titleContainer}>
        <div className={styles.sphereShape}></div>
        <p>Marketing Association New Zealand </p>
      </div>
      <nav className={ menuIsOpen ? styles.navActive : styles.navHidden }>
      {/* Closes menu when the nav buttons are clicked: */}
        <ul onClick={() => setMenuIsOpen(false)}>
          {/* combined two module-scoped class names when using CSS modules */}
          <li className={`${styles.btn} ${styles.NavLink}`}>News</li>
          <li className={`${styles.btn} ${styles.NavLink}`}>Newsletters</li>
          <li className={`${styles.btn} ${styles.NavLink}`}>Subscribe</li>
        </ul>
        <button className={styles.login}>Login</button>
      </nav>
      {/* Hamburger menu */}
      <div className={`${styles.hamburger} ${menuIsOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
