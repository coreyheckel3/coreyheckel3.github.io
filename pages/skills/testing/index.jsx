import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import '/components/styles.css'
import Navigation from '@/components/Navigation';
import Footer2 from '/components/Footer2';

export default function Testing() {
  return (
    <>
    <Navigation />
      <Head>
        <title>Testing & Quality Assurance</title>
      </Head>
      <h1 className='header'>Testing & Quality Assurance</h1>
      <div className='skillList'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original-wordmark.svg" title="JUnit"alt='image'/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/circleci/circleci-plain-wordmark.svg" title="CircleCI"alt='image'/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" title="Postman"alt='image'/>
          

      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg" title="ESLint"alt='image'/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg" title="Jira"alt='image'/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/travis/travis-original.svg" title="Travis"alt='image'/>
         </div>
         <Footer2 />

    </>
  );
}