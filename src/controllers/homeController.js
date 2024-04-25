const connection = require('../config/database')
const { getAllUser, getUserById, updateUserById, DeleteUserById } = require('../services/CRUDservice');
const User = require('../models/user');


const getHomePage = async (req, res) => {
    let results = await User.find({});
    return res.render('home.ejs', { listUsers: results });

}

const getCreateNewUser = (req, res) => {
    return res.render('create-user.ejs');
}

const postCreateNewUser = async (req, res) => {
    let { email, name, city } = req.body;
    console.log(req.body);
    await User.create({
        name,
        email,
        city
    })

    res.send('success');
}

const getUpdateAUser = async (req, res) => {
    const userId = req.params.userId;
    // let user = await getUserById(userId);
    let user = await User.findById(userId).exec();
    return res.render('edit-user.ejs', { user: user });
}

const postUpdateUser = async (req, res) => {
    let { userId, email, name, city } = req.body;
    // console.log(userId, email, name, city);
    // await updateUserById(email, city, name, userId)

    await User.updateOne({ _id: userId }, { email: email, name: name, city: city })
    res.redirect('/');
}

const getDeleteUser = async (req, res) => {
    const userId = req.params.userId;
    let user = await User.findById(userId).exec();
    return res.render('delete-user.ejs', { user: user });
}

const postDeleteUser = async (req, res) => {
    let userId = req.body.userId;
    // await DeleteUserById(userId);

    let data = await User.deleteOne({ _id: userId });
    console.log(data);
    res.redirect('/');
}

module.exports = {
    getHomePage,
    postCreateNewUser,
    getCreateNewUser,
    getUpdateAUser,
    postUpdateUser,
    getDeleteUser,
    postDeleteUser
}