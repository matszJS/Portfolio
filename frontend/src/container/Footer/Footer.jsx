import React, { useState,useRef,useContext } from 'react';
import { iconsAssets } from '../../assets/icons'
import { AppWrap, MotionWrap } from '../../wrapper';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { ThemeContext } from '../../context'

import './Footer.scss';

const Footer = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const { register,handleSubmit,formState:{errors}} = useForm()
  const theme = useContext(ThemeContext)
  const darkmode = theme.state.darkmode

  const onSubmit = (e) =>  {
    // e.preventDefault()
    // Email provider EmailJS
    emailjs.sendForm('service_gat1evw', 'template_xevedih', formRef.current, 'TKmf2qmWxdfmvq-XT')
    .then((result) => {
        console.log(result.text);
        setDone(true)

    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className='app_footerC' style={{ background: darkmode ? '#242424':'#000000', color:  '#ffffff'}}>
      <h2 className="head-text">Let's discuss <span>your project</span> </h2>
      <div className="app__footer-form app__flex">
        <div className="left">
          <div className="left-info">
            <div className="left-info-item">
              <iconsAssets.BiPhoneCall width={30} height={30} style={{marginRight:'20px'}}/>
              +9 3247 8721
            </div>
            <div className="left-info-item">
              <iconsAssets.AiOutlineMail width={30} height={30} style={{marginRight:'20px'}}/>
                msalazarjs712@gmail.com
            </div>
            <div className="left-info-item">
              <iconsAssets.MdOutlinePlace width={30} height={30} style={{marginRight:'20px'}}/>
              Chile
            </div>
          </div>
        </div>
        <div className={`right ${done ? 'mt-5' : ''}`}>
          <p className={`desc ${done ? 'd-none' : ''}`}>
            <b>What's your story?</b>. Get in touch. Always freelancing if the right project comes along me. 
          </p>
          {!done ? (
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>

            <div className='input-container'>
              <input placeholder='Username' name='username' {...register("username", {
                    required: {
                      value: true,
                      message: "Necesitas este campo"
                    },
                    pattern: {
                      value: /[A-Za-z]/,
                      message: "El formato no es correcto"
                    }
                  })}/>

                {errors.username && <span className={ `${errors.username && 'text-danger'}`}>{errors.username.message}</span>}
              </div>

            <div className='input-container'>
              <input name='subject' placeholder='Subject' {...register("subject", {
                required: {
                  value: true,
                  message: "Necesitas este campo"
                }
              })} />
              {errors.subject && <span className={ `${errors.subject && 'text-danger'}`}>{errors.subject.message}</span>}
            </div>
              <div className='input-container'>
                <input name='email' placeholder='Email'
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Necesitas este campo"
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "El formato no es correcto"
                        }
                      })} />
                {errors.email && <span className={ `${errors.email && 'text-danger'}`}>{errors.email.message}</span>}
            </div>
            
            <div className='input-container'>
              <textarea name="message" placeholder='Message' rows="5" cols='5' {...register("message", {
                      required: {
                        value: true,
                        message: "Necesitas este campo"
                      },
                      maxLength:{
                        value:400,
                        message:'max length is 400 characters'
                      }
                    })}></textarea>
              {errors.message && <span className={ `${errors.message && 'text-danger'}`} style={{display:'block',paddingBottom:'1rem'}}>{errors.message.message}</span>}
            </div>
            <button>Send</button>
          </form>
          )
            : (
              <h3 className="head-text pt-4">
              Thank you for getting in touch!
            </h3>
            )
        }
        </div>
      </div>
     
    </div>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact'
);