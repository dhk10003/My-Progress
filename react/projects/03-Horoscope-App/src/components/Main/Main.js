import "./Main.scss";
import { data } from "../../helpers/data";
import Card from "./Card";

console.log(data);

const Main = () => {
    return (
        <div className="card-container">
            {data.map((item, index) => {
                return <Card {...item} key={index}/>
            })}
        </div>
    )
}

export default Main;