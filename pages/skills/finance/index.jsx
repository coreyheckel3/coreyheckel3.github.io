import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import '/components/styles.css'
import Navigation from '@/components/Navigation';
import Footer from '/components/Footer';

export default function Finance() {
  return (
    <>
    <div className="layout">

    <Navigation />
      <Head>
        <title>Finance & Economics</title>
      </Head>
      <h1 className='algorithmsTitle'>Finance & Economics</h1>
      <ul className='algorithms'>
      <div id='algorithmsListItem'>
          <li>Stock Simulations</li>
          <li>Monte Carlo Simulation</li>
          <li>Brownian Motion</li>
          <li>Black Scholes Model</li>
          <li>Option Pricing</li>
          <li>Call Option</li>
          <li>European Options</li>
          <li>Fair Price</li>
          <li>Butterfly Spreads</li>
          <li>Portfolio Optimization</li>
          <li>ETF Stocks</li>
          <li>Compound Interest</li>
          <li>Cash Flow</li>
          <li>Interest Rates</li>
          <li>Internal Rate of Return</li>
          <li>Cost Analysis</li>
          <li>Tax Analysis</li>
          <li>Inflation</li>
          <li>Uncertainty</li>
          <li>Excel</li>
          </div>
      </ul>
      <Footer />
    </div>
    </>
  );
}