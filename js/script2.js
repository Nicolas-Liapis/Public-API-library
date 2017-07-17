$(document).ready(function() {
  var filmsAPI = 'http://swapi.co/api/films/?format=json';
  function displayFilms(data) {
    var filmsHTML = '<ul class="film-list">';
    $.each(data.results, function (i, film) {
      filmsHTML += '<li class="title">';
      filmsHTML += '<a href="swlogo.png" rel="lightbox" target="_blank" data-lightbox="inside" data-title="Title: ' + film.title + ' </br> Director: ' + film.director + ' </br> Episode: ' + film.episode_id + ' </br> Release Date: ' + film.release_date + '">';
      filmsHTML += film.title;
      filmsHTML += '</a></li>';
    });
    filmsHTML += '</ul>';
    $('#cards').html(filmsHTML);
  }
  $.getJSON(filmsAPI, displayFilms);
});
