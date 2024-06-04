import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import Navigation from '/components/Navigation';
import '/components/styles.css'
import Footer2 from '/components/Footer2';
export default function Education() {
  return (
    <>
      <Head>
        <title>Education</title>
      </Head>
      <Navigation />
      <div className="education-container">
      <h1 className='header'>Stevens Institute of Technology</h1>
      <div className="degree-gpa-container">
      <h2 className='degree'>B.E - Software Engineering 2024</h2>
      <h3 className='gpa'>GPA: 3.723</h3>
      </div>
      <div className="degree-gpa-container">
      <h2 className='degree'>M.S - Machine Learning 2024</h2>
      <h3 className='gpa'>GPA: 4.0</h3>
      </div>
      <div className='course-type1'>
      <h5>Software Engineering Core Courses</h5>
      <h5>Machine Learning Core Courses</h5>
      </div>
      <div className="course-container1">
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
      <ul>
        <li>Artificial Intelligence</li>
        <li>Machine Learning: Fundamentals & Applications</li>
        <li>Deep Learning</li>
        <li>Natural Language Processing</li>
        <li>Applied Machine Learning</li>
        <li>Applied Statistics with Applications in Finance</li>
          <li>Big Data Technologies</li>
      </ul>
      </div>
      <div className='course-type2'>
      <h5>Domain Electives</h5>
      <h5>Finance & Economics</h5>
      </div>
      <div className="course-container2">
      <ul>
          <li>Web Programming I</li>
          <li>Web Programming II</li>
          <li>Database Management Systems</li>
          <li>C++ Programming in Finance</li>
          <li>Visualizing Society</li>
      </ul>
      <ul>
        <li>Engineering Economics</li>
        <li>Logistics & Supply Chain Management</li>
        <li>Entrepreuial Thinking</li>
        <li>C++ Programming in Finance</li>
        <li>Applied Statistics with Applications in Finance</li>
      </ul>
      </div>
      <div className='course-type3'>
      <h5>General Engineering</h5>
      <h5>Math</h5>
      </div>
      <div className="course-container3">
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
      <ul>
          <li>Differential Calculus</li>
          <li>Integral Calculus</li>
          <li>Series, Vectors, Functions, & Surfaces</li>
          <li>Multivariable Calculus</li>
          <li>Differential Equations</li>
          <li>Discrete Mathematics</li>
          <li>Probability & Statistics</li>
      </ul>
      </div>
      
        </div>
        <Footer2 />

    </>
  );
}