import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import '/components/styles.css'
import Navigation from '@/components/Navigation';
export default function Testing() {
  return (
    <>
    <Navigation />
      <Head>
        <title>Testing & Quality Assurance</title>
      </Head>
      <h1 className='header'>Testing & Quality Assurance</h1>
      <div className='skillList'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original-wordmark.svg" />
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/circleci/circleci-plain-wordmark.svg" />
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
          

      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg" />
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg" />
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/travis/travis-original.svg" />
         </div>
    </>
  );
}