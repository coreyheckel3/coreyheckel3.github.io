import Navigation from '../components/Navigation'; // Assuming the Navigation component file is in the same directory
import '/components/styles.css'
import resume from '../public/resumelogo.png';
import github from '../public/github.png'
import linkedin from '../public/linkedin.png'
import Image from 'next/image'

export default function Index(pageProps) {
  return (
    <div>
      <Navigation />
      <h1 className='myName'>Corey Heckel</h1>
      <div className="imageContainer">
      <a href="https://github.com/coreyheckel3" target="_blank">
          <Image src={github} alt="Github Logo" />
        </a>
        <Image src={resume} alt="Image 2" />
        <a href="https://www.linkedin.com/in/corey-heckel-991218271" target="_blank">
        <Image src={linkedin} alt="Image 3"  />
        </a>
      </div>
    </div>
  );
}
