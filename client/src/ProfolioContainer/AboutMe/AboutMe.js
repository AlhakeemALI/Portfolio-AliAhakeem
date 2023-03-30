import React from 'react'

import './AboutMe.css'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'



export default function AboutMe(props) {

  let fadeInScreenHandler = (screen) => {
    if(screen.fadeInScreen !== props.id)
    return
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription =
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description: "I am a Full Stack Developer with a passion for creating highly performant applications that solve real-world problems and provide users with an awesome experience.",
    highlights: {

      bullets: [
        "Full-Stack Developer",
        "Django, Django Rest Framework",
        "NodeJS",
        "Interactive Front End as per the design",
        "Building REST API",
      ],
      heading: "Here are a Few Highlights:",
    }
  }

  const renderHighlight = () => {
    return (
      SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
        <div className='highlight' key={i}>
          <div className='highlight-blob'></div>
          <span>{value}</span>
        </div>
      ))
    )
  }
  return (
    <div className='about-me-container screen-container fade-in' id={props.id || ""}>
         <div className='about-me-parent'>
               <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
               <div className='about-me-card'>
                  <div className='about-me-profile'></div>
                  <div className='about-me-details'>
                    <span className='about-me-description'> {SCREEN_CONSTANTS.description}</span>
                    <div className='about-me-highlights'>
                      <div className='highlight-heading'>
                        <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                      </div>
                      {renderHighlight()}
                    </div>
                    <div className='about-me-options'>
                    <button className='btn primary-btn'
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    >
                                {""}    
                                    Hire Me{""}
                                    </button>
                                    <a href='Ali Al Hakeem Resume.pdf' download='Ali Al Hakeem Resume.pdf'>
                                          <button className='btn highlighted-btn'> Get Resume</button>
                                    </a>
                    </div>
                  </div>
               </div>
         </div>
      </div>
  )
}
