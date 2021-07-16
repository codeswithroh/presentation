import "./Introduction.css";
import person from "../assets/svg/Person.svg";
import mobileperson from "../assets/svg/Person-mobile.svg";
import board from "../assets/svg/Board.svg";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

function Intro() {
  const isDesktoporMobile = useMediaQuery({
    query: "(max-device-width: 400px)",
  });
  const fadeX = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeY = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className='introduction'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={fadeX}
        transition={{ duration: 0.8 }}
        className='person'
      >
        <img src={isDesktoporMobile ? mobileperson : person} alt=''></img>
      </motion.div>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={fadeY}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='board'
      >
        <img src={board} alt=''></img>
      </motion.div>
      <div className='ca4'>
        <h1>
          <motion.span
            initial='hidden'
            animate='visible'
            variants={fadeX}
            transition={{ duration: 0.8, delay: 1 }}
            id='ca4-first'
          >
            CA4
          </motion.span>
          <motion.span
            initial='hidden'
            animate='visible'
            variants={fadeX}
            transition={{ duration: 0.8, delay: 1.2 }}
            id='ca4-second'
          >
            PRESENTATION
          </motion.span>
        </h1>
        <Link to='/pagecontent'>
          <motion.button
            initial='hidden'
            animate='visible'
            variants={fadeY}
            transition={{ duration: 0.8, delay: 1.4 }}
            className='start-button'
          >
            Click Here To Start
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default Intro;
