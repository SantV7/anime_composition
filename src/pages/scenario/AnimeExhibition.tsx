import { useState } from 'react';
import styles from '../scenario/animeExhibition.module.scss'
import { AiFillHome } from "react-icons/ai";
import App from '../../App';




const AnimeExhibition = () => {

const [homePage, setHomePage] = useState<boolean>(false)
if(homePage) {
  return <App />
}

  return (
    <>
    <main className={styles.anime_main}>
      <header className={styles.home_page_return}><AiFillHome 
       className={styles.home_icon} onClick={() => setHomePage(!homePage)} color='white' size={45}/></header>


    </main>
    </>
  )
}

export default AnimeExhibition