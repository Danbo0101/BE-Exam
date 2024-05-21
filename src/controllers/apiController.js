const User = require('../models/user');


const getUsers = async (req, res) => {
    let results = await User.find({});

    return res.status(200).json({
        erCode: 0,
        data: results
    })

}

const postCreateNewUser = async (req, res) => {
    let { email, name, city } = req.body;
    // console.log(req.body);
    let user = await User.create({
        name,
        email,
        city
    })

    return res.status(200).json({
        erCode: 0,
        data: user
    })
}


const putUpdateUser = async (req, res) => {
    let { userId, email, name, city } = req.body;
    // console.log(userId, email, name, city);
    // await updateUserById(email, city, name, userId)

    let user = await User.updateOne({ _id: userId }, { email: email, name: name, city: city })
    return res.status(200).json({
        erCode: 0,
        data: user
    })
}

const deleteUser = async (req, res) => {
    let userId = req.body.userId;
    // await DeleteUserById(userId);

    let data = await User.deleteOne({ _id: userId });
    return res.status(200).json({
        erCode: 0,
        data: data
    })
}


module.exports = {
    getUsers,
    postCreateNewUser,
    putUpdateUser,
    deleteUser
}