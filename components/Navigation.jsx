import Link from 'next/link';
import './styles.css';

export default function Navigation() {
  // Function to toggle the navigation menu
  const toggleMenu = () => {
    const menu = document.querySelector('.w-nav-menu');
    menu.classList.toggle('w--open'); // Toggle visibility of the menu
  };

  return (
    <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navigation-bar w-nav">
      <div className="w-container">
        <a href="/" aria-current="page" className="brand-link w-nav-brand w--current">
          <h1 className="brand-text">Corey Heckel</h1>
        </a>
        
        {/* Navigation Menu */}
        <nav role="navigation" className="navigation-menu w-nav-menu">
          <a href="/" aria-current="page" className="navigation-link w-nav-link w--current">Home</a>
          
          <div data-hover="true" data-delay="250" className="navigation-link w-dropdown">
            <div className="dropdown-toggle w-dropdown-toggle">
              <div className="text-block">Technical Skills</div>
              <div className="w-icon-dropdown-toggle"></div>
            </div>
            <nav className="dropdown-list w-dropdown-list">
              <a href="/skills/programming-languages" className="w-dropdown-link">Programming Languages</a>
              <a href="/skills/database-languages" className="w-dropdown-link">Database & Query Languages</a>
              <a href="/skills/web-technologies" className="w-dropdown-link">Web Technologies</a>
              <a href="/skills/data" className="w-dropdown-link">Data Visualization & Analysis</a>
              <a href="/skills/machine-learning" className="w-dropdown-link">Machine Learning & AI</a>
              <a href="/skills/nlp" className="w-dropdown-link">Natural Language Processing</a>
              <a href="/skills/testing" className="w-dropdown-link">Testing & Quality Assurance</a>
              <a href="/skills/documentation" className="w-dropdown-link">Documentation</a>
              <a href="/skills/tools" className="w-dropdown-link">Cloud & DevOps</a>
              <a href="/skills/finance" className="w-dropdown-link">Finance & Economics</a>
            </nav>
          </div>

          <a href="/experience" className="nav-link">Professional Experience</a>
          <a href="/education" className="nav-link">Education</a>
          <a href="/projects" className="nav-link">Projects</a>
        </nav>

        {/* Hamburger Button */}
        <div className="hamburger-button w-nav-button" onClick={toggleMenu}>
          <div className="hamburger-icon"></div>
        </div>
      </div>
    </div>
  );
}
