$(document).ready(function (){

  $(document).on('click', '.boards', function () {
    var id = $(this).attr('id');
    var getString = '/boards/' + id + '/lists';
    Trello.get(
      getString,
      loadLists,
      function () { console.log("Failed to retrieve checklist"); }
    )
  });

// $(document).on('click', 'button', function () {
//   $('button').parent().remove();
// });

  var loadLists = function (lists) {
    console.log($(this));
    // $id.append('<div class="lists"></div');
    // var $el = $('.lists');
    // $el.append('<ul></ul>');
    // lists.forEach (function (list) {
    //   $el.append('<li><a id="' + list.id + '">' + list.name + '</a></li>')
    // })
  };
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

//Boards
var loadedBoards = function (boards) {
  boards.forEach (function (board) {
    var $el = $('#boards');
    $el.append('<a class="boards" id="' + board.id + '">' + board.name + '</a><br />')
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
