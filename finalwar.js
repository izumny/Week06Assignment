class Player {              //class player (hand, score, name)
    constructor(name) {
      this.name = name;     //gets assigned when we create the object
      this.hand = [];       //default value of empty array assigned now
      this.points = 0;      //default value of 0 assigned now
    }
  
    draw(card) {
      this.hand.push(card);
    }
  
    play() {
      return this.hand.pop();
    }
}
  
class Card {                //class for card (suit, rank, faceValue)
    constructor(suit, rank, faceValue) {    //will use this class to create 52 card objects (all properties get assigned when we create the objects)
      this.suit = suit;
      this.rank = rank;
      this.faceValue = faceValue;
    }
}
  
class Deck {                //class for deck (create deck, shuffle, deal)
    constructor() {
      this.cards = [];      //52 cards here later
      this.createDeck();
      this.shuffleCards();
    }
  
    createDeck() {          //create deck method - loops through suits and values and creates 52 card objects
      let suits = ['hearts', 'diamonds', 'clubs', 'spades'];
      let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  
      for (let suit of suits) {
        for (let i = 0; i < values.length; i++) {
          let rank = i + 1;                      // Rank 1-13
          this.cards.push(new Card(suit, rank, values[i]));  //need to define the face values for the cards
        }
      }
    }
  
    shuffleCards() {        //shuffle cards method - math.floor method
      for (let i = this.cards.length - 1; i > 0; i--) {
        let x = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[x]] = [this.cards[x], this.cards[i]];
      }
    }
  
    dealCards() {
      return this.cards.pop();
    }
}
  
class Game {                    //class for game logic (card comparisons)
    constructor() {
      this.player1 = new Player('Lily');
      this.player2 = new Player('Sugar');
      this.deck = new Deck();
    }
  
    startGame() {
      while (this.deck.cards.length) {
        this.player1.draw(this.deck.dealCards());
        this.player2.draw(this.deck.dealCards());
      }
    }
  
    compareCards() {             //compare one card each for 26 of those rounds
      let card1 = this.player1.play();
      let card2 = this.player2.play();
  
      let rankDifference = card1.rank - card2.rank;
  
      if (rankDifference > 0) {
        this.player1.points++;
        console.log(`${this.player1.name} got 1 point!`);
      } else if (rankDifference < 0) {
        this.player2.points++;
        console.log(`${this.player2.name} got 1 point!`);
      }                           // Ties do nothing
    }
  
    endGame() {
      for (let i = 0; i < 26; i++) {
        this.compareCards();
      }
  
      console.log(`${this.player1.name}'s Score: ${this.player1.points}`);
      console.log(`${this.player2.name}'s Score: ${this.player2.points}`);
  
      if (this.player1.points > this.player2.points) {
        console.log(`${this.player1.name} Wins!`);
      } else if (this.player1.points < this.player2.points) {
        console.log(`${this.player2.name} Wins!`);
      } else {
        console.log('The game is a tie!');
      }
    }
  }

let game = new Game();            // call and execute the game
game.startGame();
game.endGame();