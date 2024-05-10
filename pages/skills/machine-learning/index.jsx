import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

export default function MachineLearning() {
  return (
    <>
      <Head>
        <title>Machine Learning & Computer Vision</title>
      </Head>
      <h1>Machine Learning & Computer Vision</h1>
      <ul>
          <li>Neural Networks</li>
          <li>Pytorch</li>
          <li>Tensorflow</li>
          <li>OpenCV</li>
          <li>Vuforia</li>
          <li>Image Processing</li>
      </ul>
        <p>
        <Link href={'/skills'}>
          Back   
        </Link>
        {' | '}
        <Link href={'/'}>
          Home
        </Link>
      </p>
    </>
  );
}