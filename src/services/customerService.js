const Customer = require("../models/customer");
const apq = require('api-query-params');



const createCustomer = async (dataCustomer) => {

    try {
        let result = Customer.create({
            name: dataCustomer.name,
            address: dataCustomer.address,
            phone: dataCustomer.phone,
            email: dataCustomer.email,
            image: dataCustomer.image,
            description: dataCustomer.description
        })
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const createArrayCustomer = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result;
    } catch (error) {
        console.log("err", error);
        return null;
    }
}

const getAllCustomers = async (limit, page, queryString) => {
    try {
        let result = null;
        if (limit && page) {
            let offset = (page - 1) * limit;
            let { filter } = apq(queryString);
            delete filter.page;

            // console.log(filter);
            result = await Customer.find(filter).skip(offset).limit(limit).exec();
        }
        else {
            result = await Customer.find({});
        }

        return result;
    } catch (error) {
        console.log("error", error);
        return null;
    }
}

const updateCustomer = async (id, name, email, address) => {

    try {
        let result = await Customer.updateOne({ _id: id }, { name, email, address });
        return result;
    } catch (error) {
        console.log("err", error);
        return null;
    }

}

const deleteCustomer = async (id) => {
    try {
        let result = await Customer.deleteById(id);
        return result;
    } catch (error) {
        console.log("err", error);
        return null;
    }
}

const deleteArrayCustomer = async (arrId) => {

    try {
        let result = await Customer.delete({ _id: { $in: arrId } });
        return result;
    } catch (error) {
        console.log("err", error);
        return null;
    }
}

module.exports = {
    createCustomer,
    createArrayCustomer,
    getAllCustomers,
    updateCustomer,
    deleteCustomer,
    deleteArrayCustomer
}