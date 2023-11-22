import React from "react";
import "./joke.css"
import AccordianForJokes from "./AccordianForJokes";

// the component that helps present jokes to the user in a more streamlined rendering

function Joke({ text, vote, votes }) {


    

    return (

        <div>
            <AccordianForJokes className="joke-text" text={text} vote={vote} votes={votes}/>
        </div>
    )
}

export default Joke;




// return (

//     <Accordion className="">
//         <AccordionItem eventKey="0">
//             <AccordionHeader >Joke Box{id}</AccordionHeader>
//             <AccordionBody style={{backgroundColor:"rgb(50, 61, 63)", color:"white"}}>

//                 <div className="Joke">
//                     <div className="Joke-votearea">
//                         <button onClick={evt => { vote (id, + 1)}}>
//                             <q className="fas fa-hand-point-up" />
//                         </button>
//                         <button onClick={evt => { vote (id, -1)}}>
//                             <i className="fas fa-hand-point-down" />
//                         </button>
                    
//                         <Button variant="danger" onClick={evt => { vote (id, - 5)}}>
//                             Really Bad Joke
//                         </Button>
//                         {votes}
//                     </div>
//                     <div className="joke-text">
//                         {text}
//                     </div>
//                 </div>

//             </AccordionBody>
//         </AccordionItem>
//     </Accordion>

// )