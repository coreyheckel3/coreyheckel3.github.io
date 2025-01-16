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
      <div className="hero-section centered">
        <div className="w-container">
          <h1 data-ix="fade-in-bottom-page-loads" className="hero-heading">Corey Heckel</h1>
          <div data-ix="fade-in-bottom-page-loads" className="hero-subheading">Full Stack Software Engineer<br />~~~~~~~~~~~~~~~~~~~~~~~~~~~~<br />Machine Learning<br />~~~~~~~~~~~~~~~~<br />Web Development</div>
        </div>{/* Replace <img> with the Next.js Image component */}
        <Image 
          src={me} 
          alt="Corey Heckel" 
          layout="intrinsic" 
          width={300}   /* Set a fixed width */
          height={300}  /* Set a fixed height */
          className="image"
        />
      </div>
      <div className="section">
        <div className="section-title-group">
          <h2 className="section-heading centered">Links &amp; Info</h2>
          <div className="section-subheading center">Check out my Github, Resume, &amp; LinkedIn</div>
        </div>

        {/* Grid of Links */}
        <div className="w-row">
          {/* Github Link */}
          <div className="w-col w-col-4">
            <div className="white-box">
              <a href="https://github.com/coreyheckel3" target="_blank" className="w-inline-block">
                <Image 
                  src={github} 
                  alt="Github" 
                  layout="intrinsic"
                  width={150} 
                  height={150}
                  className="grid-image"
                />
              </a>
              <h3>Github</h3>
              <p>View my projects, source code, and coding samples.</p>
            </div>
          </div>

          {/* Resume Link */}
          <div className="w-col w-col-4">
            <div className="white-box">
            <a href="/Resume Corey Heckel.pdf" download>
              <Image 
                src={resume} 
                alt="Resume" 
                layout="intrinsic"
                width={150} 
                height={150}
                className="grid-image"
              />
            </a>
              <h3>Resume</h3>
              <p>Download my most recent resume and view my experience and technical skills.</p>
            </div>
          </div>

          {/* LinkedIn Link */}
          <div className="w-col w-col-4">
            <div className="white-box">
              <a href="https:www.linkedin.com/in/corey-heckel-991218271" target="_blank" className="w-inline-block">
                <Image 
                  src={linkedin} 
                  alt="LinkedIn" 
                  layout="intrinsic"
                  width={150} 
                  height={150}
                  className="grid-image"
                />
              </a>
              <h3>LinkedIn</h3>
              <p>Visit my LinkedIn to learn more about my experience, education, and projects.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}