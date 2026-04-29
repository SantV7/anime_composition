import styles from './videoCharactere.module.scss'
const VideoCharactere = () => {




  return (
    <>
      <section className={styles.area_video}>
        <iframe className={styles.iframe_config} rel='0'  src="https://www.youtube.com/embed/-xt1y8Ldsos?si=OGZJHOlsiGOHkJMX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <iframe className={styles.iframe_config} rel='0'  src="https://www.youtube.com/embed/LjJeYKnaU6E?si=ivPWT6hPdLxvOYLy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      </section>
    </>
  )
}

export default VideoCharactere