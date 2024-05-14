import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import '/components/styles.css'
import Navigation from '@/components/Navigation';
export default function Documentation() {
  return (
    <>
    <Navigation />
      <Head>
        <title>Documentation</title>
      </Head>
      <h1 className='header'>Documentation</h1>
      <div className='skillList'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg" />
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg" />
      <img src="/OverleafImage.png"/>
      <img src="/LucidChartImage.png"/>
      </div>
    </>
  );
}