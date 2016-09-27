var loadedCards = function (cards) {
  cards.forEach (function (card) {
    if (card.idChecklists.length  > 0) {
      var div = document.getElementById("boards");
      var h = document.createElement("a");
      var b = document.createTextNode(card.name);
      h.appendChild(b);
      div.appendChild(h);
      console.log(card.idChecklists[0]);
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
