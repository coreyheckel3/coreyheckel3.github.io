import Link from 'next/link';
import './Navigation.css';
//TESTING
export default function Navigation() {
  return (
    <ul className='menu cf'>
      <li className='nav'>
        <Link href='/'>Home</Link>
      </li>
      <li className='nav'>
        <a className='start'>Technical Skills</a>
        <ul className='submenu'>
          <li className='nav'>
            <Link href='/skills/programming-languages'>Programming Languages</Link>
          </li>
          <li className='nav'>
            <Link href='/skills/database-languages'>Database & Query Languages</Link>
          </li>
          <li className='nav'>
            <Link href='/skills/web-technologies'>Web Technologies</Link>
          </li>
          <li className='nav'>
            <Link href='/skills/data'>Data Visualization & Analysis</Link>
          </li>
          <li className='nav'>
            <Link href='/skills/machine-learning'>Machine Learning & Artificial Intelligence</Link>
          </li>
          <li className='nav'>
            <Link href='/skills/nlp'>Natural Language Processing</Link>
          </li>
          <li className='nav'>
            <Link href='/skills/testing'>Testing & Quality Assurance</Link>
          </li>
          <li className='nav'>
            <Link href='/skills/documentation'>Documentation</Link>
          </li>
          <li className='nav'>
            <Link href='/skills/tools'>Cloud & DevOps</Link>
          </li>
          <li className='nav'>
            <Link href='/skills/finance'>Finance & Economics</Link>
          </li>
        </ul>
      </li>
      <li className='nav'>
        <Link href='/experience'>Professional Experience</Link>
      </li>
      <li className='nav'>
        <Link href='/education'>Education</Link>
      </li>
      <li className='nav'>
        <Link href='/projects'>Projects</Link>
      </li>
    </ul>
  );
}
