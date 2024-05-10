import Link from 'next/link';

export default function Navigation() {
  
  return (
    <ul className='navClass center'>
      <li className='nav'>
        <Link href='/about'>About</Link>
      </li>
      <li className='nav'>
        <Link href='/skills'>Technical Skills</Link>
      </li>
      <li className='nav'>
        <Link href='/experience'>Experience</Link>
      </li>
      <li className='nav'>
        <Link href='/education'>Education</Link>
      </li>
      <li className='nav'>
        <Link href='/projects'>Academic Projects</Link>
      </li>
    </ul>
  );
}