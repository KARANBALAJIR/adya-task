const { checkpass } = require('../hashpassword');
const User = require('../model/user')

const CreateUser = async (req, res) => {
    try {
        const { name, email, phoneno, password } = req.body;
        console.log("Received name:", name);
        console.log("Received email:", email);
        // Check if the "name" field is provided in the request body
        if (!name) {
            return res.status(400).json({ message: 'Name is required.' });
        }

        // Check if a user with the given name already exists
        const existingUser = await User.findOne({ where: { name } });

        if (existingUser) {
            // User with the same name already exists
            return res.status(400).json({ message: 'User already exists with the same name.' });
        }

        // Create a new user
        const newUser = await User.create({
            name,
            email,
            phoneno,
            password
        });

        // New user was created
        console.log("New user created:", newUser);
        return res.status(200).json({ message: "success", newUserData: newUser });
    } catch (err) {
        return res.status(200).json({ message: err.message });
    }
}
const updateUser = async (req, res) => {
    try {
        const { name, email, id, password } = req.body



        const DbUser = await User.findOne({ where: { name: name } })


        console.log(DbUser)
        const user = await User.update({ name: name || DbUser.name, email: email ||DbUser.phoneno, phoneno: phoneno || DbUser.email, password: password }, { where: { id: id || DbUser.id } })

        return res.json({ message: true }).status(200)
    } catch (err) {
        return res.status(200).json({ message: err.message })
    }
}
const UserLogin = async (req, res) => {
    try {

        const { name, password } = req.query;
       console.log("hai"+" "+name+" "+password+" "+req.query);
        const user = await User.findOne({ where: { name: name }});
        console.log(user);
        if (password==user.password){
            console.log(user.password);
            res.end(JSON.stringify({ "message": true }));
        }
        else{
            console.log("ere");
            res.status(400).send(JSON.stringify({ "message": false }));
        }

    } catch (err) {
        res.status(200).send(JSON.stringify({ "message": "No user found" }));
    }
}
// const UserLogin = async (req, res) => {
//     try {
//         // Retrieving parameters from req.query
//         const { name, password } = req.query;
        
//         // Logging to verify values
//         console.log("Received name:", name);
//         console.log("Received password:", password);

//         // Rest of your logic remains the same
//     } catch (err) {
//         res.status(200).send(JSON.stringify({ "message": "No user found" }));
//     }
// }

module.exports = {
    UserLogin: UserLogin,
    updateUser: updateUser,
    CreateUser: CreateUser
}