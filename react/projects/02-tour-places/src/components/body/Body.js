import bodyStyles from './Body.module.scss';
import { data } from "../helpers/data"
import Card from "./Card";

const Body = () => {
    return (
        
        <div className={bodyStyles.cardContainer}>
            {data.map((city, index) => {
                return <div className={bodyStyles.cards}><Card {...city} key={index}/></div>
            })}
            
        </div>
    )
}

export default Body;