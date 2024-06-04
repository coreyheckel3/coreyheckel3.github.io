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
      <h2 className='algorithms'>Algorithms and Skills</h2>
      <ul>
          <li>Linear Regression</li>
          <li>Logistic Regression</li>
          <li>Decision Trees</li>
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
      </ul>
      <div className='skillList'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" title="PyTorch"/>
          
      <img src="/VuforiaImage.png" title="Vuforia"/>

      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" title="Tensorflow"/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" title="OpenCv"/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" title="Jupyter"/>
      
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" title="Matplotlib"/>
      

      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" title="Keras"/>
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" title="Scikit-learn"/>
                    
          
        </div>
    </>
  );
}