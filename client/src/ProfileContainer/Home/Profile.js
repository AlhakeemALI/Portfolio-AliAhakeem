import React from 'react'
import Typical from 'react-typical'

const Profile = () => {
  return (
      <div className='profile-container'>
      <div className='profile-parent'>
          <div className='profile-details'>
             <div className='colz'>
                  <div className='colz-icon'>
                     <a href='https://www.linkedin.com/in/ali-al-hakeem/'>
                           <i className='fa fa-linkedin-square'></i>
                     </a>
                     <a href='https://github.com/AlhakeemALI'>
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
                                    {" "}
                                    <Typical
                                    loop={Infinity}
                                    steps={
                                           [
                                                "Full-Stack Software Engineer 🔴",
                                                1000,
                                                "Python🐍",
                                                1000,
                                                "React/React Native Dev 📱",
                                                1000,
                                          ] 
                                    }
                                          wrapper="p"
                                    />
                              </h1>
                                    <span className='profile-role-tagline'>
                                            Full-Stack Developer passionate about creative problem-solving.
                                    </span>
                        </span>   
                  </div>
                              <div className='profile-options'>
                                    <button className='btn primary-btn'>
                                    {""}
                                    Hire Me
                                    </button>
                                    <a href='AliAlhakeem.pdf' download='AliAlhakeem.pdf'>
                                          <button className='btn highted-btn'> Get Resume</button>
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
