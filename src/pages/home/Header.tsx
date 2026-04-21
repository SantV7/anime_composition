import styles from '../home/header.module.scss'

const Header = () => {

  const iconsAnime = [
    {id: 1, img: ''},
    {id: 2, img: ''},
    {id: 3, img: ''},
    {id: 4, img: ''},
    {id: 5, img: ''}
  ]

    
  return (
    <>
    <header className={styles.header}>
      <section className={styles.icons_anime}>
        {/* tenho que pegar as img dos icons  */}
        {iconsAnime.map((iconImg) => (
          <div key={iconImg.id}></div>
        ))}

      </section>
    </header>

    </>
  )
}

export default Header