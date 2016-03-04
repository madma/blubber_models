var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blubber_app");

var User = require("./models/User");
var Thread = require("./models/Thread");

Thread.remove({}, function(err, results) {
  User.remove({}, function(err, results) {
    User.create([
        {name: "John Marshall", email: "jm@us.courts.gov", moderator: true},
        {name: "Oliver Wendell Holms", email: "owh@us.courts.gov", moderator: false},
        {name: "Thurgood Marshall", email: "tm@us.courts.gov", moderator: false},
        {name: "Sandra Day O'Connor", email: "sdo@us.courts.gov", moderator: false}
      ], function(err, users) {
      if (err) console.log();

      console.log(users);

      var john = users[0];
      var thur = users[2];

      // create threads
      Thread.create([
        {name: "YOLO", creator: john},
        {name: "Think Different", creator: thur}
        ],
        function(err, thread) {
          if (err) console.log(err);
          console.log(thread.creator);
          mongoose.connection.close();
        });
    });
  });
});



