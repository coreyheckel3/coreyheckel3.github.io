import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

export default function Documentation() {
  return (
    <>
      <Head>
        <title>Documentation</title>
      </Head>
      <h1>Documentation</h1>
      <ul>
          <li>UML</li>
          <li>Overleaf</li>
          <li>LaTex</li>
          <li>LucidChart</li>
          <li>Requirements Analysis</li>
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