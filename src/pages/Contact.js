import React, { useState } from "react";
import Navigation from "../components/Navigation";
import DotsIndic from '../components/DotsIndic';

import { motion } from 'framer-motion';
import { SuperNavMenu } from '../components/SuperNavMenu';
import sun from '../images/sun.png'; // with import
import moon from '../images/moonBack.png'; // with import
import Mouse from "../components/Mouse";


const Contact = () => {

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sunTrans = { //Pour soleil
    initial: {
        opacity: 0,
        x: -100,
        y: -100,
    },
    visible: {
        opacity: 1,
        transition: { duration: 2},
        x: 0,
        y: 0,
    },
    exit: {
       opacity: 0,
       transition: { duration: 1},
       x: -150,
       y: 80,
    }
}

const shootingStar = { //Pour comete
  initial: {
      opacity: 0
  },
  visible: {
      opacity: 1,
      transition: { duration: 1}
  },
  exit: {
     opacity: 0,
     transition: { duration: 1}
  }
}

const moonTrans = { //Pour la lune
      initial: {
          opacity: 1,
          x: 0,
          y: 200,
      },
      visible: {
          opacity: 1,
          transition: { duration: 3, bounce: 0.3},
          x: 0,
          y: 0  ,
      },
      exit: {
          y: 200,
          transition: { duration: 1, bounce: 0.3},
      }
  }

  const contactForm = { //Pour la lune
      initial: {
          opacity: 0,
          x: 0,
          y: -500,
      },
      visible: {
          opacity: 1,
          transition: { duration: 3, type: "spring", bounce: 0.3},
          x: 0,
          y: 100,
      },
      exit: {
        opacity: 0,
        transition: { duration: 1, bounce: 0.3},
        x: 0,
        y: -500,
      }
  }
  

  const isEmail = () => {
    let mail = document.getElementById('not-mail')
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = 'none';
      return true;
    } else {
      mail.style.display = 'block';
      mail.style.animation = 'dongle 1s';
      setTimeout(() => {
        mail.style.animation = 'none';
      }, 1000);
      return false;
    }
  }

  const failMessage = (message) => {
    let formMess = document.querySelector('.form-message');
    formMess.innerHTML = message;
    formMess.style.opacity = '1';
    formMess.style.background = 'rgb(253, 87, 87)';

    document.getElementById('name').classList.add('error');
    document.getElementById('email').classList.add('error');
    document.getElementById('message').classList.add('error');
  }

  const sucessMessage = () => {
    let formMessage = document.querySelector('.form-message');
    formMessage.innerHTML = 'Thank you for filling out your information!'
    formMessage.style.background = '#00c1ec';
    formMessage.style.opacity = '1';

    document.getElementById('name').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('message').classList.remove('error');

    setTimeout(() => {
      formMessage.style.opacity = '0';
    }, 5000);

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      sendFeedback("template_7gftpjk", {
        name,
        company,
        phone,
        email,
        message,
      });

    } else {
      failMessage('Thanks for filling our form *');
    }
  };

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send('service_33i2ma7', templateId, variables)
      .then((res) => {
        sucessMessage();
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) => {
          failMessage("Une erreur s'est produite, veuillez réessayer.");
        })
  };

  return (

    <div className="contact">

      <DotsIndic/>
      <Mouse/>
      <motion.div className="divMenu" initial="initial" animate="visible" exit="exit" variants={sunTrans} transition={sunTrans}>
          <img id="sun" className="hover" src={sun}/>
          <SuperNavMenu />
      </motion.div>

      <motion.img id="moonBackground" className="hover" src={moon} initial="initial" animate="visible" exit="exit" variants={moonTrans}/>

      <motion.form className="contact-form" src={moon} initial="initial" animate="visible" exit="exit" variants={contactForm}>
        <h2>Contact</h2>
        <div className="form-content">
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="name *"
            value={name}
            autoComplete="off"
          />
          <input
            type="text"
            id="company"
            name="company"
            onChange={(e) => setCompany(e.target.value)}
            placeholder="society"
            value={company}
          />
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="phone"
            value={phone}
          />
          <div className="email-content">
            <label id="not-mail">Email non valide</label>
            <input
              type="mail"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email *"
              value={email}
              autoComplete="off"
            />
          </div>
          <textarea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message *"
            value={message}
          />
        </div>
        <input
          className="button"
          type="button"
          value="Send"
          onClick={handleSubmit}
        />
        <div className="form-message"></div>
      </motion.form>
      <motion.section initial="initial" animate="visible" exit="exit" variants={shootingStar}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
      </motion.section>

    </div>
  );
};

export default Contact;