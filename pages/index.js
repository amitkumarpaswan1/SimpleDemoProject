import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

import Msterials from '@material-ui/core'

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></script>;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <Link href="/home/home" ><a>Register here</a></Link><br></br>
        <Link href="/home/Login"><a>Login here</a></Link>
      </Head>
      

      
    </div>
  )
}
