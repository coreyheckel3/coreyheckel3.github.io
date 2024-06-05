import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import '/components/styles.css'
import Navigation from '@/components/Navigation';
import Footer2 from '/components/Footer2';

export default function WebTechnologies() {
  return (
    <>
    <Navigation />
      <Head>
        <title>Web Technologies</title>
      </Head>
      <h1 className='header'>Web Technologies</h1>

      <div className='skillList'>

      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" title="React"alt='image'/>

      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" title="Next"alt='image'/>
                        
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" title="Node"alt='image'/>
                
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" title="Express"alt='image'/>
      
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg" title="Flask"alt='image'/>
      
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg" title="Mongoose"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg" title="jQuery"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain-wordmark.svg" title="Axios"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" title="Angular"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original-wordmark.svg" title="Socket.io"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" title="Bootstrap"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original-wordmark.svg" title="Redis"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gulp/gulp-plain.svg" title="Gulp"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg" title="Vue"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" title="Tailwind"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" title="Figma"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/handlebars/handlebars-original-wordmark.svg" title="Handlebars" alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg" title="OAuth"alt='image'/>
          
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" title="Redux"alt='image'/>
          

      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original-wordmark.svg" title="Vite" alt='image'/>
      <Image src="/PhaserImage.png" title="Phaser" alt='image'/> 
      </div>     
      <Footer2 />
      
    </>
  );
}