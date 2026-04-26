import { useEffect, useRef } from 'react';
import styles from '../animeexhibition/animeExhibition.module.scss'
import { AiFillHome } from "react-icons/ai";
import gsap from 'gsap';
import Cards from '../cards/Cards';


import denji from '../../../assets/img/slider_img/denji.jpg'
import gojo_c from '../../../assets/img/slider_img/gojo-c.jpg'
import touka from '../../../assets/img/slider_img/touka.jpg'
import eren from '../../../assets/img/slider_img/eren.jpg'
import demonSlayer from '../../../assets/img/slider_img/ds-reflex.jpg'
import friren_j from '../../../assets/img/slider_img/frieren-jumping.jpg'
import gojo_s from '../../../assets/img/slider_img/gojo-s.jpg'
import raze from '../../../assets/img/slider_img/raze.jpg'
import kaneki from '../../../assets/img/slider_img/Kanenki-ken.jpg'
import frieren_s from '../../../assets/img/slider_img/frieren-s.jpg'
import att_flower from '../../../assets/img/slider_img/att.jpg'



interface Props {
  onBack: () => void;
}


const AnimeExhibition = ({ onBack }: Props) => {
  const mainHome = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const imgSliderList = [
    denji, gojo_c, touka, eren, demonSlayer,
    friren_j, gojo_s, raze, kaneki, frieren_s, att_flower
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (mainHome.current) {
        gsap.fromTo(mainHome.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      }



      const setupAnimation = () => {
        if (!sliderRef.current) return
        const scrollWidth = sliderRef.current.scrollWidth;
        const halfWidth = scrollWidth / 2

        if (halfWidth > 0) {
          gsap.to(sliderRef.current, {
            x: -halfWidth,
            duration: 40,
            ease: "none",
            repeat: -1,
            force3D: true,
            modifiers: {
              x: gsap.utils.unitize(x => parseFloat(x) % halfWidth)
            }
          })
        }
      }

      const images = sliderRef.current?.querySelectorAll('img');
      if (images) {
        let loaded = 0;
        const totalImages = images.length;
        images.forEach(img => {
          if (img.complete) {
            loaded++
            if (loaded === totalImages) setupAnimation();
          } else {
            img.onload = () => {
              loaded++
              if (loaded === totalImages) setupAnimation();
            };
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainHome} className={styles.anime_main}>
      <header className={styles.home_page_return}>
        <AiFillHome className={styles.home_icon} onClick={onBack} color='white' size={45} />
      </header>

      <section className={styles.slider_img}>
        <div className={styles.track} ref={sliderRef}>
          {imgSliderList.map((img, i) => <Cards key={`a-${i}`} imgI={img}/>)}
          {imgSliderList.map((img, i) => <Cards key={`b-${i}`} imgI={img}/>)}
        </div>
      </section>

      <section className={styles.info_characters}>
        <div className={styles.content_character}>
          <h1>Frieren - Frieren</h1>
          <article>
            <h3>Maga/Elfa</h3>
          </article>
        </div>


        <div className={styles.content_character}>
          <h1>Frieren - Frieren</h1>
          <article>
            <h3>Maga/Elfa</h3>
          </article>
        </div>


        <div className={styles.content_character}>
          <h1>Gojo - Jujutsu Kaisen</h1>
          <article>
            <h3>Feiticeiro</h3>
          </article>
        </div>


        <div className={styles.content_character}>
          <h1>Kaneki - Tokyo Ghoul</h1>
          <article>
            <h3>Ghoul/Humano</h3>
          </article>
        </div>


        <div className={styles.content_character}>
          <h1>Frieren - Frieren</h1>
          <article>
            <h3>Maga/Elfa</h3>
          </article>
        </div>
      </section>



    </main>
  );
};

export default AnimeExhibition;