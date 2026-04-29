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
import kaneki from '../../../assets/img/slider_img/kanenki-ken.jpg'
import frieren_s from '../../../assets/img/slider_img/frieren-s.jpg'
import att_flower from '../../../assets/img/slider_img/att.jpg'
import VideoCharactere from '../../videosLink/VideoCharactere';

interface Props {
  onBack: () => void;
}

const AnimeExhibition = ({ onBack }: Props) => {
  const mainHome = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const imgSliderList = [
    denji, gojo_c, touka, eren, demonSlayer,
    friren_j, gojo_s, raze, kaneki, frieren_s, att_flower
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (mainHome.current) {
        gsap.fromTo(mainHome.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      }

      if (cardsContainerRef.current) {
        gsap.from(cardsContainerRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.3
        });
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
        images.forEach(img => {
          if (img.complete) {
            loaded++
            if (loaded === images.length) setupAnimation();
          } else {
            img.onload = () => {
              loaded++
              if (loaded === images.length) setupAnimation();
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

      <section className={styles.info_characters} ref={cardsContainerRef}>
        <div className={styles.content_character}>
          <h1>Frieren</h1>
          <article>
            <h3>Maga | Elfa</h3>
            <p>Uma maga elfa que fez parte do grupo de heróis que derrotou o Rei Demônio. Como elfa, ela vive milênios, o que a faz perceber o tempo de forma diferente dos humanos, buscando agora entender melhor os sentimentos mortais.</p>
          </article>
        </div>

        <div className={styles.content_character}>
          <h1>Denji</h1>
          <article>
            <h3>Híbrido | Caçador</h3>
            <p>Um jovem pobre que se funde com seu cão-demônio, Pochita, tornando-se o Chainsaw Man. Ele luta contra demônios na esperança de viver uma vida normal e realizar seus desejos mais simples.</p>
          </article>
        </div>

        <div className={styles.content_character}>
          <h1>Satoru Gojo</h1>
          <article>
            <h3>Feiticeiro Jujutsu</h3>
            <p>Conhecido como o feiticeiro mais forte do mundo. Portador do Ilimitado e dos Seis Olhos, Gojo é uma figura carismática e arrogante que atua como mentor na Escola de Jujutsu de Tóquio.</p>
          </article>
        </div>

        <div className={styles.content_character}>
          <h1>Ken Kaneki</h1>
          <article>
            <h3>Meio-Ghoul</h3>
            <p>Um estudante universitário que, após um acidente, recebe órgãos de um Ghoul. Ele deve aprender a sobreviver em um mundo onde precisa consumir carne humana, enquanto tenta manter sua humanidade.</p>
          </article>
        </div>

        <div className={styles.content_character}>
          <h1>Eren Yeager</h1>
          <article>
            <h3>Portador de Titã</h3>
            <p>Um jovem movido pelo desejo de vingança contra os Titãs que destruíram sua casa. Ao descobrir que possui o poder de se transformar em um, ele se torna a última esperança (ou ameaça) da humanidade.</p>
          </article>
        </div>
      </section>

      <VideoCharactere />
    </main>
  );
};

export default AnimeExhibition;