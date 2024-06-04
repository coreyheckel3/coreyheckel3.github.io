import Navigation from '../components/Navigation'; // Assuming the Navigation component file is in the same directory
import '/components/styles.css'
import resume from '../public/resumelogo.png';
import github from '../public/github.png'
import linkedin from '../public/linkedin.png'
import Image from 'next/image'
import me from '../public/me.png'
import Footer from '../components/Footer';

export default function Index(pageProps) {
  return (
    <div>
      <Navigation />
      <h1 className='myName'>Corey Heckel</h1>
      <h2 className='myRole'>Full Stack Software Engineer, Machine Learning, Web Development</h2>
      <Image className='me' src={me} alt="Me"></Image>
      <div className="imageContainer">
      <a href="https://github.com/coreyheckel3" target="_blank">
          <Image src={github} alt="Github Logo" />
        </a>
      <a href="/Corey Heckel Resume 2024.docx" download>
        <Image src={resume} alt="Resume Logo" />
      </a>
      <a href="https://www.linkedin.com/in/corey-heckel-991218271" target="_blank">
      <Image src={linkedin} alt="LinkedIn"  />
      </a>
      </div>
      <Footer />
    </div>
    
  );
}
