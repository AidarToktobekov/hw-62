import { useState } from 'react';
import './cards.css'
import Card from './components/card.tsx'
import {CardDeck} from './components/lib/CardDeck.ts';
import {PokerHand} from './components/lib/PokerHand.ts';

const App =()=> {
  const cards = new CardDeck;
  let test;
  const [randomCards, setRandomCards] = useState(
    test = cards.getCarts(5)
  ) 

  const getNewCard = ()=>{
    setRandomCards(
      test = cards.getCarts(5)
    )
  };

  const pokerHand = new PokerHand(randomCards);

  return (
    <>
    <div className="text-center">
      <button className='btn btn-light' onClick={getNewCard}>App</button>
      <span className='PokerHand'>Poker Hand: {pokerHand.getOutcome()}</span>
      <div id='playingCards' className="playingCards faceImages text-center mt-4">
        <Card rank={randomCards[0].rank} suit={randomCards[0].suit}/>
        <Card rank={randomCards[1].rank} suit={randomCards[1].suit}/>
        <Card rank={randomCards[2].rank} suit={randomCards[2].suit}/>
        <Card rank={randomCards[3].rank} suit={randomCards[3].suit}/>
        <Card rank={randomCards[4].rank} suit={randomCards[4].suit}/>
      </div>
    </div>
    </>
  );
}


export default App
