Trello.authorize({
  type: "popup",
  name: "Trello dashboard",
  scope: {
    read: true,
    write: false
  },
  expiration: "never",
  success: function() { console.log("Authentication success"); },
  error: function() { console.log("Failed authentication"); }
});
