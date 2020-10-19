import React, { ReactElement } from 'react'
import styles from './Header.module.scss'

const Header = () : ReactElement => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        UTS Teknologi Sistem Terintegrasi II3160
      </div>
      <div className={styles.title}>
        Audrey Betsy
      </div>
      <div className={styles.title}>
        18218039
      </div>
    </div>
  )
}

export default Header
