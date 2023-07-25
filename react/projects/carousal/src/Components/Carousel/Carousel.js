import Button from "../Button/Button"
import './Carousel.css'

const Carousel = ({image,previous,next })=> {
    
    return(
        <div className="Carousel">
            <img alt={image} src={image} />
            {/* buttons */}
            <Button 
                size ={50}
                color={"#eee"}
                icon = {"fas fa-chevron-circle-left"}
                position = {{ top: "40%", left: "10px"}}
                direction = {previous}
            />
            <Button
                size ={50}
                color={"#eee"}
                icon = {"fas fa-chevron-circle-right"}
                position = {{ top: "40%", right: "10px"}}
                direction = {next}
            />

        </div>
    )
}

export default Carousel