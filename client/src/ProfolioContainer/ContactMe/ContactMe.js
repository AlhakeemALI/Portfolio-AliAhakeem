import React from 'react'
import './ContactMe.css'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import imgBack from '../../../src/images/send-email.jpg'
import load1 from '../../../src/images/load2.gif'
import Typical from 'react-typical'


export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if(screen.fadeScreen !== props.id)
    return
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  return (
      <div className='main-container' id={props.id || ''}>

          <ScreenHeading subHeading={"Let's Keep In Touch"}title={"Contact Me"}/>
        <div className='central-form'>
            <div className='col'>
                <h2 className='title'>
                                        {" "}
                                        <Typical
                                        loop={Infinity}
                                        steps={
                                              [
                                                    "Get In Touch 📧",
                                                    2000,
                                        
                                              ] 
                                        }
                                              wrapper="p"
                                        />
                                  </h2>
                                  <a target="_blank" href='https://www.linkedin.com/in/ali-al-hakeem/'>
                                  <i className='fa fa-linkedin-square'></i>
                                  </a>
                                  <a target="_blank"  href='https://github.com/AlhakeemALI'>
                                  <i className='fa fa-github-square'></i>
                                  </a>
            </div>
        </div>
      </div>
  )
}
