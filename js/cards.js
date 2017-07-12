$(document).ready(function() {

  var cardsAPI = 'https://deckofcardsapi.com/api/deck/new/draw/?count=6';

  function displayCards(data) {
    var cardsHTML = '<ul class="deck">';
    $.each(data.cards, function (i, card) {
      cardsHTML += '<li class="card">';
      cardsHTML += '<img src=" ' + card.image + '">';
      cardsHTML += '</li>';
    });
    cardsHTML += '</ul>';
    $('#cards').html(cardsHTML);
  }
  $.getJSON(cardsAPI, displayCards);
});
