import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import '/components/styles.css'
import Navigation from '@/components/Navigation';

export default function MachineLearning() {
  return (
    <>
    <Navigation />
      <Head>
        <title>Machine Learning & Computer Vision</title>
      </Head>
      <h1 className='header'>Machine Learning & Computer Vision</h1>
      <div className='skillList'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" />
          
      <img src="/VuforiaImage.png"/>

      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" />
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" />
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" />
      
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" />
      

      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" />
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" />
                    
          
        </div>
    </>
  );
}