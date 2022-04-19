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
async function getDataFromFunction(dno){
    let result = await sequelize.query(`select * from  get_employeerecords(${dno})`);
    return result;
}

// call the method
getDataFromFunction(20).then((rowSet)=>{
    console.log(`Result  = ${JSON.stringify(rowSet[0])}`);
}).catch((error)=>{
    console.log(`Error Occurred ${error}`);
});

async function callStoredProc(){
    let result = await sequelize.query("CALL sp_insertdepartment(110, 'Dept_110', 'Bangalore', 900)");
    return result; 
}

callStoredProc().then((result)=>{
    console.log(`Insert Successful  = ${JSON.stringify(result[0])}`);
}).catch((error)=>{
    console.log(`Error Occurred ${error}`);
});

