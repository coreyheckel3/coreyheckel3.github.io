import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

export default function Data() {
  return (
    <>
      <Head>
        <title>Data Visualization & Analysis</title>
      </Head>
      <h1>Data Visualization & Analysis</h1>
      <ul>
          <li>Plotly</li>
          <li>Dash</li>
          <li>Pandas</li>
          <li>NumPy</li>
          <li>Three</li>
          <li>D3</li>
          <li>Eigen</li>
          <li>Mokka</li>
      </ul>
        <p>
        <Link href={'/skills'}>
          Back   
        </Link>
        {' | '}
        <Link href={'/'}>
          Home
        </Link>
      </p>
    </>
  );
}