import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import Navigation from '/components/Navigation';
export default function Education() {
  return (
    <>
      <Head>
        <title>Education</title>
      </Head>
      <Navigation />
      <h1>Stevens Institute of Technology</h1>
      <h2><a href= 'https://www.stevens.edu/program/software-engineering-bachelor-degree' target="_blank">B.E - Software Engineering 2024</a></h2>
      <h3>GPA: 3.7</h3>
      <h4>Relevant Courses</h4>
      <h5>Software Engineering Core Courses</h5>
      <ul>
          <li>Individual Software Engineering</li>
          <li>Object Oriented Software Engineering</li>
          <li>Modeling & Simulation</li>
          <li>Software Engineering Design</li>
          <li>Software Requirements Engineering</li>
          <li>Agile Methods for Software Development</li>
          <li>Software Testing, Quality Assurance & Maintanance</li>
          <li>Software Cost Estimation & Metrics</li>
          <li>Systems Engineering Architecture</li>
      </ul>
      <h5>Domain Electives</h5>
      <ul>
          <li>Web Programming I</li>
          <li>Web Programming II</li>
          <li>Database Management Systems</li>
          <li>C++ Programming in Finance</li>
          <li>Visualizing Society</li>
      </ul>
      <h5>Math</h5>
      <ul>
          <li>Differential Calculus</li>
          <li>Integral Calculus</li>
          <li>Series, Vectors, Functions, & Surfaces</li>
          <li>Multivariable Calculus</li>
          <li>Differential Equations</li>
          <li>Discrete Mathematics</li>
          <li>Probability & Statistics</li>
      </ul>
      <h5>Finance & Economics</h5>
      <ul>
        <li>Engineering Economics</li>
        <li>Logistics & Supply Chain Management</li>
        <li>Entrepreuial Thinking</li>
        <li>C++ Programming in Finance</li>
      </ul>
      <h5>General Engineering</h5>
      <ul>
        <li>Engineering Graphics</li>
        <li>Engineering Experiences</li>
        <li>Seminar in Mechanical Engineering</li>
        <li>Introduction to Systems Thinking</li>
        <li>Field Sustainable Systems with Sensors</li>
        <li>Circuits & Systems</li>
        <li>Structural Performance & Failure</li>
        <li>Mechanics of Solids</li>
        <li>Systems with Analog Circuits</li>
        <li>Materials Selection & Process Optimization</li>
        <li>Materials Processing</li>
      </ul>
      <h5>Science</h5>
      <ul>
        <li>General Chemistry</li>
        <li>Mechanics</li>
        <li>Biology & Biotechnology</li>
        <li>Electricity & Magnetism</li>
        <li>Astronomy</li>
        <li>Thermodynamics</li>
        </ul>
    </>
  );
}