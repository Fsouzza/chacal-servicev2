import styles from './ScrollToTop.module.scss';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useState, useEffect } from 'react';

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const ScrollBackToTop = () => {
  const [isVisable, setIsVisable] = useState(false);

  const toggleVisibitity = () => {
    window.pageYOffset > 100 ? setIsVisable(true) : setIsVisable(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibitity);

    return () => {
      window.removeEventListener('scroll', toggleVisibitity);
    };
  }, []);

  return(
    <div className={styles.backToTop} style={isVisable ? {visibility: 'visible'} : {visibility: 'hidden'}} onClick={scrollTop}>
      <div className={styles.icon}>
        <AiOutlineArrowUp />
      </div>
    </div>
  );
};

export default ScrollBackToTop;