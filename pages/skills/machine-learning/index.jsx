import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import '/components/styles.css'
import Navigation from '@/components/Navigation';
import Footer2 from '/components/Footer2';

export default function MachineLearning() {
  return (
    <>
    <Navigation />
      <Head>
        <title>Machine Learning & Computer Vision</title>
      </Head>
      <h1 className='header'>Machine Learning & Computer Vision</h1>
      <h2 className='algorithmsTitle'>Algorithms and Skills</h2>
      <ul className='algorithms'>
        <div id='algorithmsListItem'>
          <li>Linear Regression</li>
          <li>Logistic Regression</li>
          <li>Time Series</li>
          <li>ARIMA</li>
          <li>Linear Discriminant Analysis</li>
          <li>Decision Trees</li>
          <li>Random Forest</li>
          <li>Bias-Variance Tradeoff</li>
          <li>Ensemble Learning</li>
          <li>Deep Learning</li>
          <li>Support Vector Machine</li>
          <li>Bayesian Learning</li>
          <li>Unsupervised Learning</li>
          <li>Mixture of Gaussians</li>
          <li>Dimensionality Reduction</li>
          <li>K-Nearest Neighbors</li>
          <li>K-Means Clustering</li>
          <li>Neural Networks</li>
          <li>Convolutional Neural Networks</li>
          <li>Naive Bayes</li>
          </div>
      </ul>
      <div className='skillList'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" title="PyTorch"alt='image'/>
          
      <img src="/VuforiaImage.png" title="Vuforia"alt='image'/>

      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" title="Tensorflow"alt='image'/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" title="OpenCv"alt='image'/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" title="Jupyter"alt='image'/>
      
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" title="Matplotlib"alt='image'/>
      

      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" title="Keras"alt='image'/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" title="Scikit-learn"alt='image'/>
                    
          
        </div>
        <Footer2 />

    </>
  );
}