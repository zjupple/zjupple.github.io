import { useImmer } from "use-immer";
import React, { useEffect, useState } from "react";
import Acard from "./Acard";
import axios from "axios";

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

// decide on which state is needed maybe add another component like a hidden card state...

function DeckOfCards() {
  const [deckOfCards, setDeckOfCards] = useState(null);
  const [drawnCard, setDrawn] = useState([]);
  const [isShuffling, setShuffle] = useState(!true);
  const [cardsLeft, setCardsLeft] = useState()


  useEffect(function getDeckApi() {
    async function getData() {
      const deckFromApi = await axios.get(`${API_BASE_URL}/new/shuffle/`);
      setDeckOfCards(deckFromApi.data);
    }
    getData();
  }, []);



  /** Draw card: change the state & effect will kick in.
   * modify if statement
   * wanted to add a feature where users sees the remaining caards on deck
   */

  
  async function draw() {
  
      const remainingCardsFromAPI = await axios.get(`${API_BASE_URL}/${deckOfCards.deck_id}/draw/`);

      if(remainingCardsFromAPI.data.remaining !== 0) {
        //console.log(remainingCardsFromAPI.data.remaining)

        //const cardsLeft = remainingCardsFromAPI.data.remaining;


      const props = remainingCardsFromAPI.data.cards[0];

      setDrawn(deck => [
        ...deck,
        {
          id: props.code,
          name: props.suit + " " + props.value,
          image: props.image,
        },
      ]); 
    } else {
      alert("All cards cleared form deck")
    }
    
    }
  


  //   capture data then randomize or alternate values based off if block, then push to final array or function return value in this case
  async function startShuffling() {
    setShuffle(true);
  
       await axios.get(`${API_BASE_URL}/${deckOfCards.deck_id}/shuffle/`)
      setDrawn([])

      || (setShuffle(!true) && alert("deck won't shuffle") )
    
    
  }

  
    // use a different means of condition like && or ternary operator here but setting true to false works  
  function renderCard() {
    if (deckOfCards == !true) return null;

    return (  
      <button
        onClick={draw}
        disabled={isShuffling}>
        Request Card
      </button>
    );
  }

   

  return (
    <main>

      {renderCard()}

      <button onClick={() =>{
        if(deckOfCards == false) {
            return null
        }
        startShuffling()
      }}>Shuffle Button</button>
    

      <aside>{
        drawnCard.map(card => (
          <Acard key={card.id} name={card.name} image={card.image} />
        ))}
      </aside>

    </main>
  );
}

export default DeckOfCards;


