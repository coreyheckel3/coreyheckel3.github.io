import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import '/components/styles.css'
import Navigation from '@/components/Navigation';
export default function Tools() {
  return (
    <>
    <Navigation />
      <Head>
        <title>Software & Tools</title>
      </Head>
      <h1 className='header'>Software & Tools</h1>

      <div className='skillList'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
      <img src="/IoTImage.png"/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" />
      <img src="/PerforceIcon.png"/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" />
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gimp/gimp-original.svg" />
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/labview/labview-original.svg" />
      <img src="/AgileImage.png"/>
      <img src="/ExcelImage.png"/>
      <img src="/SolidworksImage.png"/>
    </div>
    </>
  );
}