const { uploadSingleFile } = require('../services/fileService')
const { createCustomer, createArrayCustomer, getAllCustomers
    , updateCustomer, deleteCustomer, deleteArrayCustomer
} = require('../services/customerService')

const postCreateCustomer = async (req, res) => {

    let { name, address, phone, email, description } = req.body;

    let imageUrl = '';

    if (!req.files || Object.keys(req.files).length === 0) {

    }
    else {
        let result = await uploadSingleFile(req.files.image);
        imageUrl = result.path;
    }


    let CustomerData = {
        name,
        address,
        phone,
        email,
        image: imageUrl,
        description
    }

    let customer = await createCustomer(CustomerData);

    return res.status(200).json({
        EC: 0,
        data: customer
    })


}

const postCreateManyCustomer = async (req, res) => {

    // console.log(req.body.customers);

    let customers = await createArrayCustomer(req.body.customers);

    if (customers) {
        return res.status(200).json({
            EC: 0,
            data: customers
        })
    }
    else {
        return res.status(400).json({
            EC: -1,
            data: null
        })
    }
}

const getAllCustomer = async (req, res) => {

    let limit = req.query.limit;
    let page = req.query.page;
    let result = null;

    if (limit && page) {
        result = await getAllCustomers(limit, page, req.query);
    }
    else result = await getAllCustomers();


    return res.status(200).json({
        EC: 0,
        data: result
    })


}

const putUpdateCustomer = async (req, res) => {

    let { id, name, email, address } = req.body;

    let result = await updateCustomer(id, name, email, address)
    return res.status(200).json({
        EC: 0,
        data: result
    })
}

const deleteACustomer = async (req, res) => {

    // console.log(req.body.id);

    let id = req.body.id;

    let result = await deleteCustomer(id);
    return res.status(200).json({
        EC: 0,
        data: result
    })

}

const deleteManyCustomer = async (req, res) => {

    let ids = req.body.customerId;

    let result = await deleteArrayCustomer(ids);
    return res.status(200).json({
        EC: 0,
        data: result
    })

}

module.exports = {
    postCreateCustomer,
    postCreateManyCustomer,
    getAllCustomer,
    putUpdateCustomer,
    deleteACustomer,
    deleteManyCustomer
}