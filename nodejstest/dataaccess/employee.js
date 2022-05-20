import { Sequelize } from 'sequelize';
import pkg from 'sequelize';
const { DataTypes } = pkg;
// 2. Database Mapping Metadata
// 2a. Model Mapping
import employee from './../models2/employee.js'
import department from '../models2/department.js';
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
class DataAccessEmployee {
    // Lets initialize the Mapping between Model class and Table using sequelize
    // generated model
    // This will establish connection to Database and resolve ES 6 DataTypes
    constructor() {
        employee.init(sequelize, DataTypes);
    }

    async getData(req, resp) {
        // 1. Synchronize with DB using sequelize object
        // do not overwrite DB
        await sequelize.sync({ force: false });
        // 2. read all records
        let records = await employee.findAll({ order: sequelize.literal('empno ASC') });
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
        let record = await employee.findOne({ where: { empno: id } });
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
        let record = await employee.create(dept);
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
        let record = await employee.update({
            empno: dept.empno,
            empname: dept.empname,
            designation: dept.designation,
            salary: dept.salary,
            deptno: dept.deptno,
        }, { where: { empno: id } });
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
        let record = await employee.destroy({ where: { empno: id } });
        // 3. send response
        if (record) {
            return resp.status(200).send({ message: 'Data is deleted successfully', data: record });
        }
        return resp.status(500).send({ message: 'Error Occured while deleting data' });
    }
    async getEmployeesByAnd(req, resp) {
        // 1. Synchronize with DB using sequelize object
        // do not overwrite DB

        await sequelize.sync({ force: false });
        // 2. read all records
        let records;
        let dept;
        let empname = req.params.empname;

        let deptname = req.params.deptname;
        // 3. send response
        req.query.op = 'AND'
        if (empname && deptname) {
            console.log("reqqq", req.query.empname);
            dept = await department.findOne({
                where: {
                    deptname: req.params.deptname,
                }
            })
        }
        console.log("deptbkjwb", dept);
        if (req.query.op === 'AND') {
            records = await employee.findAll({
                where: {
                    empname: req.params.empname,
                    deptno: dept.deptno,
                }
            })
        }
        // else if (req.query.op === 'OR') {
        //     records = await employee.findAll({
        //         where: {
        //             [Op.or]: [{ empname: req.query.empname }, { deptno: dept.deptno }]
        //         }
        //     })
        // }
        else {
            records = await employee.findAll();
        }
        if (records) {
            return resp.status(200).send({ message: 'Data is read successfully', data: records });
        }
        return resp.status(500).send({ message: 'Error Occured while reading data' });
    }
    async getEmployeesByOR(req, resp) {
        // 1. Synchronize with DB using sequelize object
        // do not overwrite DB
        await sequelize.sync({ force: false });
        // 2. read all records
        let records;
        let dept;
        // 3. send response
        req.query.op = 'OR'
        if (req.query.empname && req.query.deptname) {
            console.log("reqqq", req.query.empname);
            dept = await department.findOne({
                where: {
                    deptname: req.query.deptname,
                }
            })
        }
        console.log("deptbkjwb", dept);
        // if (req.query.op === 'AND') {
        //     records = await employee.findAll({
        //         where: {
        //             empname: req.query.empname,
        //             deptno: dept.deptno,
        //         }
        //     })
        // }
        if (req.query.op === 'OR') {
            records = await employee.findAll({
                where: {
                    [Op.or]: [{ empname: req.query.empname }, { deptno: dept.deptno }]
                }
            })
        }
        else {
            records = await employee.findAll();
        }
        if (records) {
            return resp.status(200).send({ message: 'Data is read successfully', data: records });
        }
        return resp.status(500).send({ message: 'Error Occured while reading data' });
    }


    async postDeptEmp(req, resp) {
        // 1. Synchronize with DB using sequelize object
        // do not overwrite DB
        await sequelize.sync({ force: false });
        // 2. read body
        let record;
        let { emp } = req.body;
        console.log('==>', emp);
        for await (const variable of emp) {
            console.log("variable", variable);
            record = await employee.create(variable);

        }

        console.log("empppp", record);
        let dept = req.body.dept;
        // 3. add new record
        //  let record = await employee.create(emp);
        let record1 = await department.create(dept);
        // console.log("record",record);
        if (record1 && record) {
            return resp.status(200).send({ message: 'Data is added successfully', data: record1, emp });
        }
        return resp.status(500).send({ message: 'Error Occured while adding data' });
    }

}

export default DataAccessEmployee;