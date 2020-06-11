const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;

    const result = await db.get_user(username);
    const existingUser = result[0];

    if (existingUser) {
      return res.status(409).send("Username already in use");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const registeredUser = await db.register_user(username, hash);

    const user = registeredUser[0];

    req.session.user = {
      id: user.id,
      username: user.username,
    };

    res.status(201).send(req.session.user);
  },

  login: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;

    const foundUser = await db.get_user([username]);

    const user = foundUser[0];

    if (!user) {
      return res
        .status(401)
        .send("User hasn't been created. Please register before logging in");
    }

    const isAuthenticated = bcrypt.compareSync(password, user.hash);

    if (!isAuthenticated) {
      return res.status(403).send("Incorrect password");
    }

    req.session.user = { id: user.id, user: username };

    res.status(201).send(req.session.user);
  },
};
