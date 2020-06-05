const bcrypt = require("bcrypt")

module.exports = {
    register: async (req, res) => {
        const db = req.app.get("db")
        const {username, password} = req.body

        const result = await db.get_user(username)
        const existingUser = result[0]

        if(existingUser) {
            return res.status(409).send("Username taken")
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const registeredUser = await db.register_user(username, hash)
        
        const user = registeredUser[0]

        req.session.user = {
            id: user.id,
            username: user.username
        };

        res.status(201).send(req.session.user)
    }
}