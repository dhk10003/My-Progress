import bodyStyles from './Body.module.scss';

const Card = (data) => {
    return (
        <>
            <div className={bodyStyles.title}>
                <h1>{data.title}</h1>
            </div>
            <img src={data.image} alt="" />
            <div className={bodyStyles.description}>
                <p>{data.desc}</p>
            </div>
        </>
    )
}

export default Card;