import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.scss'
function Page404 () {
  const History = useHistory()
  useEffect(() => {
    const id = setTimeout(() => {
      History.push('/')
      clearTimeout(id)
    }, 5000)
  })

  return <div className={styles.errorBox}><img src='/public/404.png' alt='error' /></div>
}

export default Page404
