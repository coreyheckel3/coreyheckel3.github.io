import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Skills</title>
      </Head>
      <h1>Skills</h1>
      <ul>
          <li className='nav'>
            <Link href={`/skills/programming-languages`}>
              Programming Languages
            </Link>
          </li>
          <li className='nav'>
            <Link href={`/skills/database-languages`}>
              Database & Query Languages
            </Link>
          </li>
          <li className='nav'>
            <Link href={`/skills/web-technologies`}>
              Web Technologies
            </Link>
          </li>
          <li className='nav'>
            <Link href={`/skills/data`}>
              Data Visualization & Analysis
            </Link>
          </li>
          <li className='nav'>
            <Link href={`/skills/machine-learning`}>
              Machine Learning & Computer Vision
            </Link>
          </li>
          <li className='nav'>
            <Link href={`/skills/testing`}>
              Testing & Quality Assurance
            </Link>
          </li>
          <li className='nav'>
            <Link href={`/skills/documentation`}>
              Documentation
            </Link>
          </li>
          <li className='nav'>
            <Link href={`/skills/tools`}>
              Software & Tools
            </Link>
          </li>
          <li className='nav'>
            <Link href={`/skills/finance`}>
              Finance & Economics
            </Link>
          </li>
      </ul>
        <p>
        <Link href={'/'}>
          Home
        </Link>
      </p>
    </>
  );
}