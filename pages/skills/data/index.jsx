import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import '/components/styles.css'
import Image from 'next/image';

import Navigation from '@/components/Navigation';
import Footer2 from '/components/Footer2';

export default function Data() {
  return (
    <>
    <Navigation />
      <Head>
        <title>Data Visualization & Analysis</title>
      </Head>
      <h1 className='header'>Data Visualization & Analysis</h1>
      <div className='skillList'>
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg" title="Plotly"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" title="Pandas"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" title="Numpy"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" title="Three"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg" title="D3"alt='image'/>
      <Image src="/MokkaImage.png" title="Mokka" alt='image'/>
      </div>
      <Footer2 />


    </>
  );
}