const expect = chai.expect;
const assert = chai.assert;

describe('Deck', function() {
  describe('#shuffleCards', function() {
    it('should change the order of cards in the deck', function() {
      let deck = new Deck();
      let originalDeck = [deck.cards]; // Copy of original deck
      deck.shuffleCards();

       // Check if any card has moved from its original position
      let isShuffled = deck.cards.some((card, index) => {
        let originalCard = originalDeck[index];
        return card.rank !== originalCard.rank || card.suit !== originalCard.suit;
      });

      expect(isShuffled).to.be.true;
    });
  });
});