const User = require('../db/User');

async function signup(req, res) {
    try {
        const {name,username, email, password, retype_password, gender, mobile_number, address} = req.body;
        const user = new User({name, username, email, password, retype_password, gender, mobile_number, address});
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
async function login(req, res) {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (email !== password) {
            return res.status(401).json({message: 'invalid email or password'});
        }
        res.json({ message: 'Login successful' });
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
module.exports = {login, signup};
