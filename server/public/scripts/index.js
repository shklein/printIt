$(document).ready(function (){

  $(document).on('click', 'a', function(){
    alert("Hey!");
});



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

var loadChecklist = function (id) {
  Trello.get(
    '/checklists/id/checkItems',
    function () { console.log("Here"); },
    function () { console.log("Failed to retrieve checklist"); }
  )};

});
