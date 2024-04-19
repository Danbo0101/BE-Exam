const connection = require('../config/database')
const { getAllUser, getUserById, updateUserById, DeleteUserById } = require('../services/CRUDservice');

const getHomePage = async (req, res) => {
    let results = await getAllUser();
    return res.render('home.ejs', { listUsers: results });

}

const getCreateNewUser = (req, res) => {
    return res.render('create-user.ejs');
}

const postCreateNewUser = async (req, res) => {
    let { email, name, city } = req.body;
    console.log(req.body);

    let [results, fields] = await connection.query(
        ` INSERT INTO Users(email,name,city) VALUES (?,?,?);`, [email, name, city]
    );
    res.send('success');
}

const getUpdateAUser = async (req, res) => {
    const userId = req.params.userId;
    let user = await getUserById(userId);
    return res.render('edit-user.ejs', { user: user });
}

const postUpdateUser = async (req, res) => {
    let { userId, email, name, city } = req.body;
    // console.log(userId, email, name, city);
    await updateUserById(email, city, name, userId)
    res.redirect('/');
}

const getDeleteUser = async (req, res) => {
    const userId = req.params.userId;
    let user = await getUserById(userId);
    return res.render('delete-user.ejs', { user: user });
}

const postDeleteUser = async (req, res) => {
    let userId = req.body.userId;
    await DeleteUserById(userId);
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