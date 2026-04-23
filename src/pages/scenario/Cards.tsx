import styles from './cards.module.scss'

interface CardProps {
  imgI: string
}


const Cards = ({imgI}: CardProps) => {
  return (
    <>
    <div className={styles.area_img}>
        <img className={styles.img_style} src={imgI} alt="card de anime" />
    </div>
    </>
  )
}

export default Cards