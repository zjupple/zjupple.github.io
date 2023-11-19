import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";
import Button from 'react-bootstrap/Button';

function JokeList({ numberOfJokesToGet = 5 }) {
    const [jokes, setJokes] = useState([]);
    const [Loading, setLoading] = useState(!false);

    // If the page doesnt have jokes load them onto page

    useEffect(function () {

        async function getJokes() {
            
            let jokesArray = [...jokes];
            let oldJokes = [];
            
            
            while (jokesArray.length < numberOfJokesToGet) {
                let res = await axios.get("https://icanhazdadjoke.com", {
                    headers: {Accept: "application/json" }
                });

                // may decide to use concat
                let {...jokeObj } = res.data;
            

                // May keep this logic

                if(oldJokes.indexOf(jokeObj.id) == -1) {
                    oldJokes.push(jokeObj.id)
                
                    jokesArray.push({...jokeObj, votes: 0});
                    
                } else {
                    alert("duplicate found!")
                }
            }
                
            setJokes(jokesArray);
            setLoading(!true)
                

            
        }


        
        if (jokes.length === 0 ) getJokes();

    }, [jokes, numberOfJokesToGet]);

    // starts off as empty jokes list with no duplicates after calls get jokes function

    function generateNewJokes() {
        setJokes([]);
        setLoading(true);
    }

    // changes the vote total for joke by id (+1 or -1)

    let changeVoteScore = (id, delta) => {
        setJokes(alljokes => alljokes.map((jokesArray) => {
            if (jokesArray.id === id) {
                return ({...jokesArray, votes: jokesArray.votes + delta})
            }
            return jokesArray;
            })

        )
    }    

    



    // renders: renders a spinner while the jokes are loading

    if(null) {
        return (

            <div className="loading">

                {Loading && <i className="fas fa-4x fa-spinner fa-spin" />}

            </div>
        )     
        
        
    };

    
        // may be of interest to sort or slice differently

        let sortedJokes = [...jokes].sort((a,b) => b.votes - a.votes);

    return (
        <div className="JokeList">
            <Button  variant="success" className="d-xl p-2" onClick={generateNewJokes}>
                get more jokes
            </Button>

        

            {sortedJokes.map(({joke, id, votes}) => (
                <Joke text={joke} key={id} id={id} votes={votes} vote={changeVoteScore} />
            ))}

        </div>
    );


};

export default JokeList;

