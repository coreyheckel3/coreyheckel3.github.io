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
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" title="AWS"/>
      <img src="/IoTImage.png"/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" title="IoT"/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" title="Git"/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" title="GitHub"/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" title="GitLab"/>
      <img src="/PerforceIcon.png" title="Perforce"/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" title="Unity"/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gimp/gimp-original.svg" title="Gimp"/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/labview/labview-original.svg" title="Labview"/>
      <img src="/AgileImage.png" title="Agile"/>
      <img src="/ExcelImage.png" title="Excel"/>
      <img src="/SolidworksImage.png" title="Solidworks"/>
    </div>
    </>
  );
}