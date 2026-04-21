import { useEffect, useRef } from 'react';
import styles from '../scenario/animeExhibition.module.scss'
import { AiFillHome } from "react-icons/ai";
import gsap from 'gsap';


   interface Props {
    onBack: () => void
   }


const AnimeExhibition = ({onBack}: Props) => {

const mainHome = useRef<HTMLElement>(null)



useEffect(() => {
  if(mainHome.current) {
    gsap.fromTo(mainHome.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
  }
}, [])




  return (
    <>
    <main ref={mainHome} className={styles.anime_main}>
      <header className={styles.home_page_return}><AiFillHome 
       className={styles.home_icon} onClick={onBack} color='white' size={45}/></header>
    </main>
    </>
  )
}

export default AnimeExhibition