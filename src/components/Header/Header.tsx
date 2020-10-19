import React, { ReactElement } from 'react'
import styles from './Header.module.scss'

const Header = () : ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        UTS TST II3160
      </div>
      <div className={styles.title}>
        Audrey Betsy
      </div>
      <div className={styles.title}>
        18218039
      </div>
      <div className={styles.title}>
        Scroll ke bawah untuk mengisi
      </div>
    </div>
  )
}

export default Header
