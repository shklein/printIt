$(document).ready(function (){

  $(document).on('click', 'a', function () {
    var id = $(this).attr('id');
    var getString = '/checklists/' + id + '/checkItems';
    Trello.get(
    getString,
    loadChecklist,
    function () { console.log("Failed to retrieve checklist"); }
  )
});

var loadChecklist = function (items) {
   $('#checklists').append('<div class="todo"></div>');
   var $el = $('.todo');
   items.forEach (function (item) {
    $el.append('<h2>' + item.name + '</h2>');
   })
};

var loadedCards = function (cards) {
  var $el = $('#cards');
  cards.forEach (function (card) {
    if (card.idChecklists.length  > 0) {
      var $el = $('#cards');
      $el.append('<a id="' + card.idChecklists[0] + '">' + card.name + '</a>');
    }
  })
};

var loadCards = function () {
  Trello.get(
'/members/me/cards',
loadedCards,
function () {console.log("Failed to retrieve cards"); }
)

}

Trello.authorize({
  type: "popup",
  name: "Trello dashboard",
  scope: {
    read: true,
    write: false
  },
  expiration: "never",
  success: loadCards,
  error: function() { console.log("Failed authentication"); }
});


});
