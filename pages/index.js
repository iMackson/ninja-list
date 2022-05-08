import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus atque minima esse, odio eaque magnam maxime cum ab dolore, soluta iure debitis recusandae quia. Consequuntur placeat pariatur animi fuga.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus atque minima esse, odio eaque magnam maxime cum ab dolore, soluta iure debitis recusandae quia. Consequuntur placeat pariatur animi fuga.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See ninjas list</a>
        </Link>
      </div>
    </>
  )
}
