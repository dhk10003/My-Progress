import { useState } from "react";
import {Card} from 'react-bootstrap';

// name, img, statistics
const PlayerCard=({name,img,statistics})=>{

    const [showStats,setShowStats] = useState(false)

    

    return (
        <Card
            className="rounded-2 m-auto player-card"
            role="button"
            onClick={
                (e) => {
                    setShowStats(!showStats);
                    console.log(e)
                }
            }
        >
            {/* Here we need to condintionally render an UL, or an IMG, depending on showStats State: */}
            
            {
                showStats ? 
                    (<ul>
                        {statistics.map((stat, index) => {
                            return <li key={index} className="h5 text-start list-unstyled">🏀 {stat}</li>
                        })}

                    </ul>)
                :
                    (<Card.Img variant="top" className="player-logo" src={img} />)
    
            }
                        
            <Card.Footer>
                <Card.Title>{name}</Card.Title>
            </Card.Footer>
        </Card>
    )
}
export default PlayerCard;