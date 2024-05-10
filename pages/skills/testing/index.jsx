import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

export default function Testing() {
  return (
    <>
      <Head>
        <title>Testing & Quality Assurance</title>
      </Head>
      <h1>Testing & Quality Assurance</h1>
      <ul>
          <li>JUnit</li>
          <li>CircleCi</li>
          <li>Postman</li>
          <li>PyLint</li>
          <li>Coverage</li>
          <li>Jira</li>
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