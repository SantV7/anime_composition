import { useEffect, useRef } from 'react';
import styles from '../scenario/animeExhibition.module.scss';
import { AiFillHome } from "react-icons/ai";
import gsap from 'gsap';
import Cards from './Cards';

// imgs do slider

import denji from '../../assets/img/slider_img/denji.jpg'
import gojo_c from '../../assets/img/slider_img/gojo-c.jpg'
import touka from '../../assets/img/slider_img/touka.jpg'
import eren from '../../assets/img/slider_img/eren.jpg'
import demonSlayer from '../../assets/img/slider_img/ds-reflex.jpg'
import friren_j from '../../assets/img/slider_img/frieren-jumping.jpg'
import gojo_s from '../../assets/img/slider_img/gojo-s.jpg'
import raze from '../../assets/img/slider_img/raze.jpg'
import kaneki from '../../assets/img/slider_img/kanenki-ken.jpg'
import frieren_s from '../../assets/img/slider_img/frieren-s.jpg'
import att_flower from '../../assets/img/slider_img/att.jpg'




// INTERFACES

interface Props {
  onBack: () => void;
}



const AnimeExhibition = ({ onBack }: Props) => {
  const mainHome = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainHome.current) {
      gsap.fromTo(mainHome.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );
    }

    if (sliderRef.current) {
      const scrollWidth = sliderRef.current.scrollWidth;
      
      gsap.to(sliderRef.current, {
        x: `-${scrollWidth / 2}`,
        duration: 15,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % (scrollWidth / 2))
        }
      });
    }
  }, []);

  

  return (
    <main ref={mainHome} className={styles.anime_main}>
      <header className={styles.home_page_return}>
        <AiFillHome 
          className={styles.home_icon} 
          onClick={onBack} 
          color='white' 
          size={45}
        />
      </header>

      <section className={styles.slider_img}>
        <div className={styles.track} ref={sliderRef}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </section>
    </main>
  );
};

export default AnimeExhibition;