const bcrypt = require("bcryptjs");
module.exports = {
  register: function(req, res) {
    const { email, password, firstName, lastName, preferredName } = req.body;
    const db = req.app.get("db");
    bcrypt.hash(password, 12).then(hash => {
      db.registerUser(email, hash, firstName, lastName, preferredName)
        .then(() => {
          //put the user on session
          req.session.user = {
            email,
            firstName,
            lastName,
            preferredName
          };
          console.log(req.session.user);
          res.status(200).json({
            email,
            firstName,
            lastName,
            preferredName
          });
        })
        .catch(err => {
          res.status(500).json(err);
        });
    });
  }
};
