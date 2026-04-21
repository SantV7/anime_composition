import styles from '../home/header.module.scss'

  interface HeaderProps {
    iDS: string;
    iAOT: string;
    iCM: string;
    iTG: string;
    iJJK: string;
  }

const Header = ({iDS, iAOT, iCM, iTG, iJJK}: HeaderProps) => {


  const iconsAnime = [
    {id: 1, img: iDS},
    {id: 2, img: iAOT},
    {id: 3, img: iCM},
    {id: 4, img: iTG},
    {id: 5, img: iJJK}
  ]

    
  return (
    <>
    <header className={styles.header}>
      <ul className={styles.icons_animes}>
        {iconsAnime.map((iconImg) => (
          <li key={iconImg.id}><img src={iconImg.img}/></li>
        ))}

      </ul>
    </header>

    </>
  )
}

export default Header