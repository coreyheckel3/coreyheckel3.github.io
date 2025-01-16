import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import '/components/styles.css'
import Navigation from '@/components/Navigation';
import Footer from '/components/Footer';

export default function Tools() {
  return (
    <>
    <div className="layout">
    <Navigation />
      <Head>
        <title>Cloud & DevOps</title>
      </Head>
      <h1 className='header'>Cloud & DevOps</h1>

      <div className='skillList'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" title="AWS"alt='image'/>
      <img src="/IoTImage.png" title="IoT"alt='image'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" title="Docker"alt='image'/>
      <img src="/databricks.png"title="Databricks"alt="image"/>
      
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original-wordmark.svg"ttile="Spark"alt="image" />
          
        
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg"title="Kafka"alt="image" />
          
    </div>
    <Footer />
    </div>
    </>
  );
}