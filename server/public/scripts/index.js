$(document).ready(function (){


var id="";

//Retrieve lists
  $(document).on('click', '.board', function () {
    $('.list').remove();
      id = $(this).attr('id');
    var getString = '/boards/' + id + '/lists';
    Trello.get(
      getString,
      loadLists,
      function () { console.log("Failed to retrieve lists"); }
    )
  });
  //Retrieve cards
  $(document).on('click', 'li', function (event) {
      event.stopPropagation();
      $('.card').remove();
      id = $(this).attr('id');
      var getString = '/lists/' + id + '/cards';
      Trello.get(
        getString,
        loadCards,
        function () { console.log("Failed to retrieve lists"); }
      )
  });

  //Retrieve checklists
  $(document).on('click', '.loadedCard', function (event) {
      event.stopPropagation();
      $('.checklist').remove();
      id = $(this).attr('id');
      var getString = '/cards/' + id + '/checklists';
      Trello.get(
      getString,
      loadChecklists,
      function () { console.log("Failed to retrieve checklists"); }
    )
   });

  //Close checklist
  $(document).on('click', 'button', function () {
    $('button').parent().remove();
  });

  //Load lists
   var loadLists = function (lists) {
     $('#' + id).append('<div class="list"></div>');
     var $el = $('.list');
     $el.append('<ul>');
     lists.forEach (function (list) {
       $el.append('<li id="' + list.id + '"><a>' + list.name + '</a></li>')
    })
    $el.append('</ul>')
  };

  //Load individual checklist
  var loadChecklist = function (items) {
      $('#checklists').empty();
      $('#checklists').append('<div class="todo"></div>');
      var $el = $('.todo');
      $el.append('<button>x</button>');
      items.forEach (function (item) {
        $el.append('<h4><img class="img2" alt="Checkbox" src="./views/img/checkbox.png" />' + item.name + '</h4>');
      })
    };

    //load checklists
    var loadChecklists = function (checklists) {
      $('#' + id).append('<div class="checklist"></div>');
      var $el = $('.checklist');
      $el.append('<ul>');
      checklists.forEach(function (checklist) {
        $el.append('<li><a class="loadedChecklist" id="' + checklist.id + '">' + checklist.name + '</a></li>');
      })
      $el.append('</ul>');
    };

    //Load cards
    var loadCards = function (cards) {
      $('#' + id).append('<div class="card"></div>');
      var $el = $('.card');
      $el.append('<ul>');
      cards.forEach (function (card) {
          $el.append('<li><a class="loadedCard" id="' + card.id + '">' + card.name + '</a></li>');
      })
      $el.append('</ul>');
    };

//Boards (on page load)
var loadedBoards = function (boards) {
  boards.forEach (function (board) {
    var $el = $('#boards');
    $el.append('<div class="board" id="' + board.id + '"><a>' + board.name + '</a></div>')
  })

  };

var loadBoards = function () {
  Trello.get(
'/members/me/boards',
loadedBoards,
function () {console.log("Failed to retrieve boards"); }
)

}

//Trello authorization
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
