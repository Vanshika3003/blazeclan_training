// 1. Import dependencies
import { Sequelize } from 'sequelize';
import pkg from 'sequelize';
const { DataTypes } = pkg;
// 2. Database Mapping Metadata
// 2a. Model Mapping
import department from './../models2/department.js'
// 2b. Sequelize Connection
const sequelize = new Sequelize('enterprize', 'vanshika', 'vk123', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
});
// 2c. Authentication (async)
sequelize.authenticate()
    .then((authenticate) => {
        console.log(`Connected to DB Successfully.... ${authenticate}`);
    }, (error) => {
        console.log(`failed....${error}`);
    });
// 3. Data Access Class
class DataAccess {
    // Lets initialize the Mapping between Model class and Table using sequelize
    // generated model
    // This will establish connection to Database and resolve ES 6 DataTypes
    constructor() {
        department.init(sequelize, DataTypes);
    }

    async getData(req, resp) {
        // 1. Synchronize with DB using sequelize object
        // do not overwrite DB
        await sequelize.sync({ force: false });
        // 2. read all records
        let records = await department.findAll({ order: sequelize.literal('deptno ASC') });
        // 3. send response
        if (records) {
            return resp.status(200).send({ message: 'Data is read successfully', data: records });
        }
        return resp.status(500).send({ message: 'Error Occured while reading data' });
    }
    async getDataById(req, resp) {
        // 1. Synchronize with DB using sequelize object
        // do not overwrite DB
        await sequelize.sync({ force: false });
        // 2. read record by id
        let id = parseInt(req.params.id);
        let record = await department.findOne({ where: { deptno: id } });
        // 3. send response
        if (record) {
            return resp.status(200).send({ message: 'Data is read successfully', data: record });
        }
        return resp.status(500).send({ message: 'Error Occured while reading data' });
    }
    async postData(req, resp) {
        // 1. Synchronize with DB using sequelize object
        // do not overwrite DB
        await sequelize.sync({ force: false });
        // 2. read body
        let dept = req.body;
        // 3. add new record
        let record = await department.create(dept);
        if (record) {
            return resp.status(200).send({ message: 'Data is added successfully', data: record });
        }
        return resp.status(500).send({ message: 'Error Occured while adding data' });
    }
    async putData(req, resp) {
        // 1. Synchronize with DB using sequelize object
        // do not overwrite DB
        await sequelize.sync({ force: false });
        // 2. read body
        let dept = req.body;
        // 3. read request parameter
        let id = parseInt(req.params.id);
        // 4. update record
        let record = await department.update({
            deptno: dept.deptno,
            deptname: dept.deptname,
            location: dept.location,
            capacity: dept.capacity
        }, { where: { deptno: id } });
        if (record) {
            return resp.status(200).send({ message: 'Data is upadated successfully', data: record });
        }
        return resp.status(500).send({ message: 'Error Occured while updating data' });
    }
    async deleteData(req, resp) {
        // 1. Synchronize with DB using sequelize object
        // do not overwrite DB
        await sequelize.sync({ force: false });
        // 2. read record by id
        let id = parseInt(req.params.id);
        let record = await department.destroy({ where: { deptno: id } });
        // 3. send response
        if (record) {
            return resp.status(200).send({ message: 'Data is deleted successfully', data: record });
        }
        return resp.status(500).send({ message: 'Error Occured while deleting data' });
    }

}

export default DataAccess;