import React from 'react'
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className={styles.mainDownNav}>
        <div className={styles.downNav}>
          <p className={styles.optionLink1}>
            Get up to ₹10000 instant savings on selected products with HDFC Bank
            credit cards.‡ Plus No Cost EMI from most leading banks.
            <Link className={styles.shopLink} to='/'> ‡‡ Shop now</Link>
          </p>
        </div>
      </div>
  )
}

export default Navbar2
