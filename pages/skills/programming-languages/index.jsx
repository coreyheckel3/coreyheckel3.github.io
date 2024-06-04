import Head from 'next/head';
import Link from 'next/link';
import '/components/styles.css'
import Navigation from '@/components/Navigation';
export default function ProgrammingLanguages() {
  return (
    <>
    <Navigation />
      <Head>
        <title>Programming Languages</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <h1 className='header'>Programming Languages</h1>
      <div className='skillList'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"/>
      
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
      
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
          
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" />
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />          
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" />
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg" />
      </div>
    </>
  );
}
