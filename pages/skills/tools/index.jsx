import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

export default function Tools() {
  return (
    <>
      <Head>
        <title>Software & Tools</title>
      </Head>
      <h1>Software & Tools</h1>
      <ul>
          <li>AWS</li>
          <li>IoT</li>
          <li>Agile</li>
          <li>Docker</li>
          <li>Github</li>
          <li>Gitlab</li>
          <li>Perforce</li>
          <li>Unity</li>
          <li>Augmented Reality</li>
          <li>GIMP</li>
          <li>Excel</li>
          <li>Solidworks</li>
          <li>Labview</li>
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