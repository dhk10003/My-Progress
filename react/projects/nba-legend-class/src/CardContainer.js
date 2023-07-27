import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Form} from 'react-bootstrap';
import PlayerCard from "./PlayerCard"

import {data} from './data';

import {useState} from 'react';

const CardContainer = () => {

    const [search , setSearch] = useState('');

    return(
        <>
            <h3>search:</h3>
            <Form.Control
                type="search"
                placeholder="Search by name..."
                aria-label="Search"
                aria-describedby="basic-addon1"
                className="w-50 m-auto"
                onChange={ (e) => setSearch(e.target.value) }
            />
            <Container className="rounded-4 my-4 p-3 bg-light card-container">
                <Row className="g-3 justify-content-center">
                    {/* return a column with a card inside for every filtered player: */}                       
                    {data.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
                    .map((item,index)=> { 
                        return(
                        <Col key={index} md={6} lg={4} xl={3} >
                            <PlayerCard {...item}  />
                        </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default CardContainer;