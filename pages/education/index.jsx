import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import Navigation from '/components/Navigation';
import '/components/styles.css'
import Footer2 from '/components/Footer2';
import CourseList from "/components/CourseList";

export default function Education() {
  const softwareEngineeringCourses = [
    "Individual Software Engineering",
    "Object Oriented Software Engineering",
    "Modeling & Simulation",
    "Software Engineering Design",
    "Software Requirements Engineering",
    "Agile Methods for Software Development",
    "Software Testing, Quality Assurance & Maintanance",
    "Software Cost Estimation & Metrics",
    "Systems Engineering Architecture"
  ];
  const machineLearningCourses = [
    "Artificial Intelligence",
    "Machine Learning: Fundamentals & Applications",
    "Deep Learning",
    "Natural Language Processing",
    "Applied Machine Learning",
    "Applied Statistics with Applications in Finance",
    "Big Data Technologies"
  ];
  const domainElectives = [
    "Web Programming I",
    "Web Programming II",
    "Database Management Systems",
    "C++ Programming in Finance",
    "Visualizing Society"
  ];
  const finance = [
    "Engineering Economics",
    "Logistics & Supply Chain Management",
    "Entrepreuial Thinking",
    "C++ Programming in Finance",
    "Applied Statistics with Applications in Finance"
  ];
  const generalEngineeringCourses = [
    "Engineering Graphics",
    "Engineering Experiences",
    "Seminar in Mechanical Engineering",
    "Introduction to Systems Thinking",
    "Field Sustainable Systems with Sensors",
    "Circuits & Systems",
    "Structural Performance & Failure",
    "Mechanics of Solids",
    "Systems with Analog Circuits",
    "Materials Selection & Process Optimization",
    "Materials Processing"
  ];
  const math = [
    "Differential Calculus",
    "Integral Calculus",
    "Series, Vectors, Functions, & Surfaces",
    "Multivariable Calculus",
    "Differential Equations",
    "Discrete Mathematics",
    "Probability & Statistics"
  ]
  return (
    <>
      <Head>
        <title>Education</title>
      </Head>
      <Navigation />
      <div className="education-container">
      <h1 className='header'>Stevens Institute of Technology</h1>
      <div className="degree-gpa-container">
      <h2 className='degree'>M.S - Machine Learning 2024</h2>
      <h3 className='gpa'>GPA: 3.97</h3>
      </div>
      <div className="degree-gpa-container">
      <h2 className='degree'>B.E - Software Engineering 2024</h2>
      <h3 className='gpa'>GPA: 3.72</h3>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
      <CourseList title="Software Engineering" courses={softwareEngineeringCourses} />
      <CourseList title="Machine Learning" courses={machineLearningCourses}/>
      <CourseList title="Domain Electives" courses={domainElectives}/>
      <CourseList title="Economics & Finance" courses={finance}/>
      <CourseList title="General Engineering" courses={generalEngineeringCourses}/>
      <CourseList title="Math" courses={math}/>

      </div>
      
        </div>
        <Footer2 />

    </>
  );
}