var dataSet = [];
var newObj = {};

//nested calls that input all data to board, push object to dataSet
//THEN, loop that appends names & IDs to document
//only clicks are for individual checklists?


var loadedBoards = function (boards) {

  boards.forEach (function (board) {
     newObj.boardName = this.name;
     newObj.boardId = this.id;
     dataSet.push(newObj);
    }
    console.log(dataSet);
  })
};

var loadBoards = function () {
  Trello.get(
'/members/me/boards',
loadedBoards,
function () {console.log("Failed to retrieve boards"); }
)

}
