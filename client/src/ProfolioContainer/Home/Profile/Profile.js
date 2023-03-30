import React from 'react'

import './Profile.css'
import ScrollService from "../../../utilities/ScrollService";

const Profile = () => {
  return (
      <div className='profile-container'>
      <div className='profile-parent'>
          <div className='profile-details'>
             <div className='colz'>
                  <div className='colz-icon'>
                     <a target="_blank" href='https://www.linkedin.com/in/ali-al-hakeem/'>
                           <i className='fa fa-linkedin-square'></i>
                     </a>
                     <a target="_blank"  href='https://github.com/AlhakeemALI'>
                           <i className='fa fa-github-square'></i>
                     </a>
                  </div> 
             </div>
              <div className='profile-details-name'>
                      <span className='primary-text'>
                          {" "}
                          Hello, I'M <span className='highlighted-text'> Ali </span>
                      </span>   
               </div>
                  <div className='profile-details-role'>
                        <span className='primary-text'>
                              {" "}
                              <h1>
                              Full-Stack Software Engineer
                        
                              </h1>
                                    <span className='profile-role-tagline'>
                                            Full-Stack Developer passionate about creative problem-solving.
                                    </span>
                        </span>   
                  </div>
                              <div className='profile-options'>
                                    <button className='btn primary-btn'
                                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                                    >
                                    {""}
                                    Hire Me
                                    </button>
                                    <a href='Ali Al Hakeem Resume.pdf' download='Ali Al Hakeem Resume.pdf'>
                                          <button className='btn highlighted-btn'> Get Resume</button>
                                    </a>
                              </div>
               </div>
                        <div className='profile-picture'>
                                    <div className='profile-picture-background'></div>
                        </div>
      </div>
</div>
  );
}

export default Profile
