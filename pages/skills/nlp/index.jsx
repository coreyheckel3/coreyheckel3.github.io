import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import '/components/styles.css'
import Navigation from '@/components/Navigation';
import Footer from '/components/Footer';

export default function NLP() {
  return (
    <>
    <div className="layout">

    <Navigation />
      <Head>
        <title>Natural Language Processing</title>
      </Head>
      <h1 className='algorithmsTitle'>Natural Language Processing</h1>
      <ul className='algorithms'>
      <div id='algorithmsListItem'>
          <li>Sentiment Analysis</li>
          <li>Text Classification</li>
          <li>Tokenization</li>
          <li>Named Entity Recognition</li>
          <li>Dependency Parsing</li>
          <li>Word Embeddings</li>
          <li>Text Similarity</li>
          <li>Language Modeling</li>
          <li>BERT</li>
          <li>GloVe</li>
          <li>Word2Vec</li>
          <li>TF-IDF</li>
          <li>SpaCy</li>
          <li>Cohere</li>
          <li>Seq2Seq</li>
          <li>Encoder & Decoder</li>
          </div>
      </ul>
      <Footer />
    </div>
    </>
  );
}