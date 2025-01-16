import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import '/components/styles.css'
import Navigation from '@/components/Navigation';
import Footer from '/components/Footer';

export default function Documentation() {
  return (
    <>
    <div className="layout">

    <Navigation />
      <Head>
        <title>Documentation</title>
      </Head>
      <h1 className='header'>Documentation</h1>
      <div className='skillList'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg" title="UML"alt='image'/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg" title="LaTex"alt='image'/>
      <img src="/OverleafImage.png" title="Overleaf"alt='image'/>
      <img src="/LucidChartImage.png" title="LucidChart"alt='image'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" title="Jupyter"alt='image'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg" title="Jira"alt='image'/>

      </div>
      <Footer />
      </div>
    </>
  );
}