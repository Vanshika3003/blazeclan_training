// 1. Import dependencies
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

// 3. Lets add a method that will execute a Query Statement (Read, Write Queries)
async function getDepartments(){
    let result = await sequelize.query("Select * from department");
    return result;
}

// call the method
getDepartments().then((rowSet)=>{
    console.log(`Result  = ${JSON.stringify(rowSet[0])}`);
}).catch((error)=>{
    console.log(`Error Occurred ${error}`);
});

async function insertDepartments(){
    let result = await sequelize.query("Insert into department (deptno,deptname,location,capacity) values (90, 'Stores', 'Pune' , 800)");
    return result;
}

// call the method
insertDepartments().then((rowSet)=>{
    console.log(`Record Inserted Successfully and Result  = ${JSON.stringify(rowSet[0])}`);
}).catch((error)=>{
    console.log(`Error Occurred ${error}`);
});