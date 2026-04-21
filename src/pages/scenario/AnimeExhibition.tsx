import { useState } from 'react';
import styles from '../scenario/animeExhibition.module.scss'
import { AiFillHome } from "react-icons/ai";


const [homePage, setHomePage] = useState<boolean>(false)

const AnimeExhibition = () => {

  return (
    <>
    <main className={styles.anime_main}>
      <header><AiFillHome /></header>

    </main>
    </>
  )
}

export default AnimeExhibition