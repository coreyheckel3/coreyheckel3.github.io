import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import '/components/styles.css'
import Navigation from '@/components/Navigation';
import Footer2 from '/components/Footer2';

export default function Tools() {
  return (
    <>
    <Navigation />
      <Head>
        <title>Software & Tools</title>
      </Head>
      <h1 className='header'>Software & Tools</h1>

      <div className='skillList'>
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" title="AWS"alt='image'/>
      <Image src="/IoTImage.png" title="IoT"alt='image'/>
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" title="Docker"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" title="Git"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" title="GitHub"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" title="GitLab"alt='image'/>
      <Image src="/PerforceIcon.png" title="Perforce"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" title="Unity"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gimp/gimp-original.svg" title="Gimp"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/labview/labview-original.svg" title="Labview"alt='image'/>
      <Image src="/AgileImage.png" title="Agile"alt='image'/>
      <Image src="/ExcelImage.png" title="Excel"alt='image'/>
      <Image src="/SolidworksImage.png" title="Solidworks"alt='image'/>
    </div>
    <Footer2 />

    </>
  );
}