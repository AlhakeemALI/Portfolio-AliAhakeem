import React, {useState} from 'react'
import './ContactMe.css'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import imgBack from '../../../src/images/send-email.jpg'
import load1 from '../../../src/images/load2.gif'
import Typical from 'react-typical'
import axios from 'axios';
import {toast } from 'react-toastify';

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if(screen.fadeInScreen !== props.id)
    return
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)


  const [name,setName] = useState('')
  const [email, setEmail] = useState('')
  const [massage,setMassage] = useState('')
  const [banner, setBanner] = useState('')
  const [bool,setBool] = useState(false)


  const handleName = (e)=>{
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleMassage = (e) => {
    setMassage(e.target.value)
  }


  const submitForm = async(e) => {
    e.preventDefault()
    try {

      let data = {
        name,
        email,
        massage
      }
        setBool(true)
        const res = await axios.post(`/contact`, data)
        if(name.length === 0 || email.length === 0 || massage.length === 0) {
          setBanner(res.data.msg)
          toast.error(res.data.msg)
          setBool(false)
        } else if (res.status === 200) {
          setBanner(res.data.msg)
          toast.success(res.data.msg)
          setBool(false)
        }

        
    } catch (error) {
      console.log(error)
    }

    
  }




  return (
      <div className='main-container fade-in' id={props.id || ''}>

          <ScreenHeading subHeading={"Let's Keep In Touch"} title={"Contact Me"}/>
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
                 <div className='back-form'>
                       <div className='img-back'>
                            <h4>Send Your Email Here!</h4>
                            <img src={imgBack} alt='Image Not Found'/>
                       </div>
                      <form onSubmit={submitForm}>
                             <p>{banner}</p>
                             <label htmlFor='name'>Name</label>
                             <input type='text'
                             onChange={handleName}
                             value={name}
                             />

                             <label htmlFor='email'>Email</label>
                             <input type='email'
                             onChange={handleEmail}
                             value={email}
                             />

                             <label htmlFor='message'>Message</label>
                             <textarea type='text'
                             onChange={handleMassage}
                             value={massage}
                             />

                             <div className='send-btn'>
                                  <button type='submit'>
                                    Send<i className='fa fa-paper-plane'/>
                                    {bool?(<b className='load'>
                                      <img src={load1} alt='image not respobding'/>
                                    </b>): ''}
                                  </button>
                             </div>
                      </form>
                 </div>
        </div>
      </div>
  )
}
