$(document).ready(function (){

//   $(document).on('click', 'a', function () {
//     var id = $(this).attr('id');
//     var getString = '/checklists/' + id + '/checkItems';
//     Trello.get(
//     getString,
//     loadChecklist,
//     function () { console.log("Failed to retrieve checklist"); }
//   )
// });
//
// $(document).on('click', 'button', function () {
//   $('button').parent().remove();
// });
//
// var loadChecklist = function (items) {
//    $('#checklists').empty();
//    $('#checklists').append('<div class="todo"></div>');
//    var $el = $('.todo');
//    $el.append('<button>x</button>');
//    items.forEach (function (item) {
//     $el.append('<h4><img class="img2" alt="Checkbox" src="./views/img/checkbox.png" />' + item.name + '</h4>');
//    })
// };

// var loadedCards = function (cards) {
//   var $el = $('#cards');
//   cards.forEach (function (card) {
//     if (card.idChecklists.length  > 0) {
//       var $el = $('#cards');
//       $el.append('<a id="' + card.idChecklists[0] + '">' + card.name + '</a><br />');
//     }
//   })
// };
//
// var loadCards = function () {
//   Trello.get(
// '/members/me/cards',
// loadedCards,
// function () {console.log("Failed to retrieve cards"); }
// )
//
// }


var loadedBoards = function (boards) {
  boards.forEach (function (board) {
    var $el = $('#boards');
    $el.append('<a id="' + board.id + '">' + board.name + '</a><br />')
  })

  };


var loadBoards = function () {
  Trello.get(
'/members/me/boards',
loadedBoards,
function () {console.log("Failed to retrieve boards"); }
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
  success: loadBoards,
  error: function() { console.log("Failed authentication"); }
});


});
