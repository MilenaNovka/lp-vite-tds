import s from './card.module.css'

export const Card = ({imgSrc, alt, title, text}) => {
    return (
        <div className={s.card}>
            <img src={imgSrc} alt={alt} />
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}