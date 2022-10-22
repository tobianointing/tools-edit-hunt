import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tool Edit Hunt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="#">Tool Edit Hunt!</a>
        </h1>
        
      </main>

   
    </div>
  )
}
