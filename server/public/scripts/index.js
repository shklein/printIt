var loadedBoards = function (boards) {
  boards.forEach (function (board) {
    var div = document.getElementById("boards");
    var h = document.createElement("p");
    var b = document.createTextNode(board.name);
    h.appendChild(b);
    div.appendChild(h);
  })
};

var loadBoards = function () {
  Trello.get(
'members/me/boards',
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
