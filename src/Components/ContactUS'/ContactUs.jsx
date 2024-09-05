
import './ContactUs.css';
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';

const ContactUs = () => {
  const fadeInUpAnimationVariants = {
    hidden :{
    opacity:0,
    y:'8rem'
    },
    show: {
      opacity:1,
      y:0,
      transition :{
        staggerChildren:0.3,
        duration:1,
      }
    },
  };
  return (
    <>
    <div className="bg-contact-us">
        <motion.div 
        initial="hidden"
        whileInView='show'
        variants={fadeInUpAnimationVariants}

        className="bg-contact-text">
            <motion.span
            variants={fadeInUpAnimationVariants}
             className='bg-contact-lets typewriter'>Lets Contact With Us</motion.span>
            <motion.span
            variants={fadeInUpAnimationVariants}
             className='bg-contact-pp'>Let’s connect! We’re committed to delivering outstanding service and support. Have questions or need help? Our friendly team is here to assist you with any inquiries.
                 Simply use our contact form, and we’ll respond promptly to ensure your needs are met.</motion.span>
                 <motion.div
                 variants={fadeInUpAnimationVariants}
                 >
          <button className='explore-us-contact'>Explore Us</button>
        </motion.div>
        </motion.div>
        <div className="bg-contact-img">
            <img src="/images/contact.png.png" alt="" />
        </div>
    </div>
    <div className="form-contact-us-container">
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <form action="https://api.web3forms.com/submit" method="POST" className='form-containersss'>
        <input type="hidden" name="access_key" value="b1307e57-23fe-4812-9bfe-b6748cdd61b7"/>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Name'
              className='input-contatcss'
              autocomplete="off"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Email'
               className='input-contatcss'
               autocomplete="off"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone No</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder='Phone No'
               className='input-contatcss'
               autocomplete="off"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder='Message'
               autocomplete="off"
              required
            />
          </div>
          <div>
          <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
    <div className="logos-contact-us">
        <h1 className='form-connect-us'>Lets Connect With Us</h1>
        <div className='contact-logos-container'>
            <span className='contact-logo'>
            <FaFacebookF/>
            </span>
            <span className='contact-logo'>
            <MdOutlineWhatsapp/>
            </span>
            <span className='contact-logo'>
            <FaInstagram/>
            </span>
        </div>
    </div>
    </div>
    </>
  );
};

export default ContactUs;
