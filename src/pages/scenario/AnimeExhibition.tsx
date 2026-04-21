import { useEffect, useRef } from 'react';
import styles from '../scenario/animeExhibition.module.scss';
import { AiFillHome } from "react-icons/ai";
import gsap from 'gsap';
import Cards from './Cards';

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