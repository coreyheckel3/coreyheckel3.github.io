import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

export default function WebTechnologies() {
  return (
    <>
      <Head>
        <title>Web Technologies</title>
      </Head>
      <h1>Web Technologies</h1>
      <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Flask</li>
          <li>Express.js</li>
          <li>Phaser</li>
          <li>jQuery</li>
          <li>DOM</li>
          <li>Axios</li>
          <li>APIs</li>
          <li>AJAX</li>
          <li>Angular</li>
          <li>XSS</li>
          <li>Websockets</li>
          <li>Socket.io</li>
          <li>Bootstrap</li>
          <li>Redis</li>
          <li>Gulp</li>
          <li>Next.js</li>
          <li>Vue.js</li>
          <li>Tailwind</li>
          <li>PeerJS</li>
          <li>Agora</li>
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