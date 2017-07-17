$(document).ready(function() {
  var cardsAPI = 'https://deckofcardsapi.com/api/deck/new/draw/?count=8';
  function displayCards(data) {
    var cardsHTML = '<ul class="deck">';
    $.each(data.cards, function (i, card) {
      cardsHTML += '<li class="card">';
      cardsHTML += '<a href=" ' + card.image + '" rel="lightbox" target="_blank" data-lightbox="inside" data-title="Value: ' + card.value + ' </br> Suit: ' + card.suit + ' </br> Code: ' + card.code + '"><img src=" ' + card.image + ' " >';
      cardsHTML += '</a></li>';
    });
    cardsHTML += '</ul>';
    $('#cards').html(cardsHTML);
  }
  $.getJSON(cardsAPI, displayCards);
});

function newa() {
  var cardsAPI = 'https://deckofcardsapi.com/api/deck/new/draw/?count=8';
  function displayCards(data) {
    var cardsHTML = '<ul class="deck">';
    $.each(data.cards, function (i, card) {
      cardsHTML += '<li class="card">';
      cardsHTML += '<a href=" ' + card.image + '" rel="lightbox" target="_blank" data-lightbox="inside" data-title="Value: ' + card.value + ' </br> Suit: ' + card.suit + ' </br> Code: ' + card.code + '"><img src=" ' + card.image + ' " >';
      cardsHTML += '</a></li>';
    });
    cardsHTML += '</ul>';
    $('#cards').html(cardsHTML);
  }
  $.getJSON(cardsAPI, displayCards);
}
