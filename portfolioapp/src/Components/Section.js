import React from 'react'
import '../Styles/Section.scss'
import portfolioImage from '../Assests/portfolio.jpg'

const Section = () => {
  return (
    <div className='section'>
      <div className='section-container'>
        <div className='section-header'>
          <h2>About Me</h2>
          <p>Learn more about my skills and experience</p>
        </div>
        
        <div className='section-content'>
          {/* Left side - Image */}
          <div className='section-image'>
            <img src={portfolioImage} alt='About Me' />
            <div className='image-overlay'>
              <h3>Shenal Chintha</h3>
              <p>Full Stack Developer</p>
            </div>
          </div>

          {/* Right side - Content */}
          <div className='section-text'>
            <h3>Passionate Developer & Problem Solver</h3>
            <p>
              I am a dedicated full stack developer with a passion for creating innovative web solutions. 
              With expertise in modern technologies, I transform ideas into reality through clean, 
              efficient, and scalable code.
            </p>
            <p>
              My journey in web development is driven by curiosity and a commitment to continuous learning. 
              I specialize in building responsive, user-friendly applications that deliver exceptional 
              digital experiences.
            </p>

            <div className='highlights'>
              <div className='highlight-item'>
                <h4>🚀 Innovation</h4>
                <p>Always exploring new technologies and methodologies</p>
              </div>
              <div className='highlight-item'>
                <h4>💡 Problem Solving</h4>
                <p>Creative solutions for complex technical challenges</p>
              </div>
              <div className='highlight-item'>
                <h4>⚡ Performance</h4>
                <p>Optimized, fast, and scalable applications</p>
              </div>
            </div>

            <div className='cta-section'>
              <button className='cta-btn primary'>Download CV</button>
              <button className='cta-btn secondary'>Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
