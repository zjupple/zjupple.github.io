import React from "react";
import "./joke.css";
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion'
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";



function AccordianForJokes({vote, id, votes, text }) {
                const handleChange = () => {

                }
    return (
        <Accordion className="body">
            <AccordionItem eventKey="0">
                <AccordionHeader >Joke Box</AccordionHeader>
                <AccordionBody style={{backgroundColor:"rgb(50, 61, 63)", color:"white"}}>

                    <div className="Joke">
                        <div className="Joke-votearea">
                            <button onClick={evt => { vote (id, + 1)}}>
                                <q className="fas fa-hand-point-up" />
                            </button>
                            <button onClick={evt => { vote (id, -1)}}>
                                <i className="fas fa-hand-point-down" />
                            </button>
                        
                            <Button variant="danger" onClick={evt => { vote (id, - 5)}}>
                                Really Bad Joke
                            </Button>
                            {votes}
                            <div className="joke-text">
                                {text}
                            </div>
                        </div>
                    </div>

                </AccordionBody>
            </AccordionItem>
        </Accordion>
    )

}

export default AccordianForJokes;