import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import '/components/styles.css'
import Image from 'next/image';

import Navigation from '@/components/Navigation';
import Footer from '/components/Footer';

export default function Data() {
  return (
    <>
    <div className="layout">

    <Navigation />
      <Head>
        <title>Data Visualization & Analysis</title>
      </Head>
      <h1 className='header'>Data Visualization & Analysis</h1>
      <div className='skillList'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg" title="Plotly"alt='image'/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" title="Pandas"alt='image'/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" title="Numpy"alt='image'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" title="Matplotlib"alt='image'/>

          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" title="Three"alt='image'/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg" title="D3"alt='image'/>

      <img src="/powerbi.webp"title="PowerBI"alt="image"/>

      <img src="/ExcelImage.png" title="Excel"alt='image'/>

      </div>
      <Footer />
    </div>

    </>
  );
}