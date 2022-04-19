import {Sequelize} from 'sequelize';
import pkg from 'sequelize';
const {DataTypes} = pkg;

const sequelize = new Sequelize('enterprize', 'sabnisadmin', 'P@ssw0rd_', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres'
});
// 2c. Authentication (async)
sequelize.authenticate()
    .then((authenticate)=>{
        console.log(`Connected to DB Successfully.... ${authenticate}`);
    },(error)=>{
        console.log(`failed....${error}`);
});
// using Model classes approach

import department from './models/department.js';
import employee from './models/employee.js'

// lets initialize the mapping
department.init(sequelize, DataTypes);
employee.init(sequelize, DataTypes);

// implement transaction

async function ManagedTx(){
    try{
        // lets bundle multiple Operations into a transaction object to start it
        // the 't' is a Automatic Managed Transaction Monitor
        // {transaction:t}: WIll inform the ORM and hence Database
        // that the current block is monitored by Transactions
        // hence the execution state of each operation will be monitored  
        let tx = await sequelize.transaction(async(t)=>{
             let dept = await department.create({
                 deptno:202, deptname: 'Admin', location:'Pune', capacity:222
             },{transaction:t});    
             let emp = await employee.create({
                 empno:1001, empname: 'neeta', designation:'manager', salary:67387, deptno:20
             },{transaction:t});
        });
    }catch(ex){
        console.log(`Error Occurred ${ex.message}`);
    } 
}

ManagedTx().then((response)=>{
  console.log(`Transaction done ${response}`);
}).catch((error)=>{
    console.log(`Transaction failed ${error}`);
});