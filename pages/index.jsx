import Navigation from '../components/Navigation';
import '/components/styles.css';
import resume from '../public/resumelogo.png';
import github from '../public/github.png';
import linkedin from '../public/linkedin.png';
import Image from 'next/image';
import me from '../public/Me.png';
import Footer from '../components/Footer';
import SocialLink from '../components/SocialLink'; // Import SocialLink component

export default function Index(pageProps) {
  return (
    <div>
      <Navigation />
      <h1 className='myName'>Corey Heckel</h1>
      <h2 className='myRole'>Full Stack Software Engineer, Machine Learning, Web Development</h2>
      <Image className='me' src={me} alt="Me" />
      
      <div className="imageContainer">
        <SocialLink 
          href="https://github.com/coreyheckel3" 
          imageSrc={github} 
          altText="Github Logo" 
        />
        <SocialLink 
          href="/Resume Corey Heckel.pdf" 
          imageSrc={resume} 
          altText="Resume Logo" 
          isDownload={true} 
        />
        <SocialLink 
          href="https://www.linkedin.com/in/corey-heckel-991218271" 
          imageSrc={linkedin} 
          altText="LinkedIn" 
        />
      </div>
      
      <Footer />
    </div>
  );
}

