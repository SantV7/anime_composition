interface CardProps {
  imgI: string
}


const Cards = ({imgI}: CardProps) => {
  return (
    <>
    <div>
        <img src={imgI} alt="card de anime" />

    </div>
    </>
  )
}

export default Cards