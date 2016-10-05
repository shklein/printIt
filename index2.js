//nested calls that input all data to board, push object to dataSet
//THEN, loop that appends names & IDs to document
//only clicks are for individual checklists?
var loadedChecklists = function (checklist) {

  checklists.forEach (function (checklists) {
    //append checklist.name to DOM
    //get checkedItems w/id -> success linkLists (onclick function)
  };

var loadedCards = function (cards) {

  cards.forEach (function (card) {
    //append card.name to DOM
    //get checklists w/id -> success loadedChecklists
  };
var loadedLists = function (lists) {

  lists.forEach (function (list) {
    //append list.name to DOM
    //get cards w/id -> success loadedCards
  };

var loadedBoards = function (boards) {

  boards.forEach (function (board) {
    var id = board.id;
    var $el = $('#menu');
    $el.append('<p>' + board.name + '</p>');
    Trello.get(
      '/'

    )
  };


//2. get Boards
var loadBoards = function () {
  Trello.get(
'/members/me/boards',
loadedBoards,
function () {console.log("Failed to retrieve boards"); }
)

}
