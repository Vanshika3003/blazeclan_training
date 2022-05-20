import { Sequelize } from "sequelize";
import pkg from "sequelize";
const { DataTypes } = pkg;

const sequelize = new Sequelize("enterprize", "sabnisadmin", "P@ssw0rd_", {
  host: "localhost",
  port: 5433,
  dialect: "postgres",
});
// 2c. Authentication (async)
sequelize.authenticate().then(
  (authenticate) => {
    console.log(`Connected to DB Successfully.... ${authenticate}`);
  },
  (error) => {
    console.log(`failed....${error}`);
  }
);
// using Model classes approach

import department from "./models/department.js";
import employee from "./models/employee.js";

// lets initialize the mapping
department.init(sequelize, DataTypes);
employee.init(sequelize, DataTypes);

// implement transaction

async function UnManagedTx() {
  // initialize TX
  let tx = await sequelize.transaction();
  try {
    let dept = await department.create(
      {
        deptno: 203,
        deptname: "Medicine",
        location: "Pune",
        capacity: 222,
      },
      { transaction: tx }
    ); // scopping of the current operation in started transaction

    let emp = await employee.create(
      {
        empno: 1002,
        empname: "neeta",
        designation: "manager",
        salary: 67387,
        deptno: 20,
      },
      { transaction: tx }
    ); // scopping of the current operation in started transaction

    // Explicitly commit
    await tx.commit();
  } catch (ex) {

    console.log(`Error Occurred ${ex.message}`);
    // rollback explicitly
    await tx.rollback();
  }
}

UnManagedTx()
  .then((response) => {
    console.log(`Transaction done ${response}`);
  })
  .catch((error) => {
    console.log(`Transaction failed ${error}`);
  });
