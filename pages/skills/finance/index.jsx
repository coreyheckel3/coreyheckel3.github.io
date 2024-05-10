import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

export default function Finance() {
  return (
    <>
      <Head>
        <title>Finance & Economics</title>
      </Head>
      <h1>Finance & Economics</h1>
      <ul>
          
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