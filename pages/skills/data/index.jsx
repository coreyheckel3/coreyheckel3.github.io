import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import '/components/styles.css'
import Navigation from '@/components/Navigation';
export default function Data() {
  return (
    <>
    <Navigation />
      <Head>
        <title>Data Visualization & Analysis</title>
      </Head>
      <h1 className='header'>Data Visualization & Analysis</h1>
      <div className='skillList'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg" title="Plotly"/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" title="Pandas"/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" title="Numpy"/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" title="Three"/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg" title="D3"/>
      <img src="/MokkaImage.png" title="Mokka"/>'
      </div>

    </>
  );
}