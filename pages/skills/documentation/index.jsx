import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import '/components/styles.css'
import Navigation from '@/components/Navigation';
import Footer2 from '/components/Footer2';

export default function Documentation() {
  return (
    <>
    <Navigation />
      <Head>
        <title>Documentation</title>
      </Head>
      <h1 className='header'>Documentation</h1>
      <div className='skillList'>
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg" title="UML"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg" title="LaTex"alt='image'/>
      <Image src="/OverleafImage.png" title="Overleaf"alt='image'/>
      <Image src="/LucidChartImage.png" title="LucidChart"alt='image'/>
      </div>
      <Footer2 />

    </>
  );
}