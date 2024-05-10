import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

export default function DatabaseLanguages() {
  return (
    <>
      <Head>
        <title>Database & Query Languages</title>
      </Head>
      <h1>Database & Languages</h1>
      <ul>
          <li>SQL</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Firebase</li>
          <li>GraphQL</li>
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