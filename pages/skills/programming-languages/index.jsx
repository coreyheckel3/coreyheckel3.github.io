import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

export default function ProgrammingLanguages() {
  return (
    <>
      <Head>
        <title>Programming Languages</title>
      </Head>
      <h1>Programming Languages</h1>
      <ul>
          <li>Javascript</li>
          <li>Python</li>
          <li>C#</li>
          <li>C++</li>
          <li>Java</li>
          <li>Typescript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>MATLAB</li>
          <li>Arduino</li>
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