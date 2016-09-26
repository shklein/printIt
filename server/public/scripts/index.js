var loadedBoards = function (boards) {
  console.log(boards);
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
