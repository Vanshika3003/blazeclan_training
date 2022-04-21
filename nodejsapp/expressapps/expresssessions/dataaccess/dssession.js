// 1. Import dependencies
import { Sequelize } from "sequelize";
import pkg from "sequelize";
const { DataTypes } = pkg;
// 2. Database Mapping Metadata
// 2a. Model Mapping
import department from "./../models/department.js";
import users from "./../models/users.js";
// 2b. Sequelize Connection
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
// 3. Data Access Class
class DataAccess {
  // Lets initialize the Mapping between Model class and Table using sequelize
  // generated model
  // This will establish connection to Database and resolve ES 6 DataTypes
  constructor() {
    department.init(sequelize, DataTypes);
    users.init(sequelize, DataTypes);
  }

  async registerUser(req, resp) {
    const user = req.body;
    await sequelize.sync({ force: false });
    // check if the user already exist
    let findUser = await users.findOne({ where: { username: user.username } });
    if (findUser !== null)
      return resp
        .status(409)
        .send({ message: `User ${user.username} is already exists` });
    // create user
    let created = await users.create(user);
    if (created !== null)
      return resp
        .status(201)
        .send({ message: `User ${user.username} is created successfully` });
  }

  async authUser(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. check for authentication
    let user = req.body;
    // 2d. check if the user exist
    let findUser = await users.findOne({ where: { username: user.username } });
    if (findUser === null)
      return resp
        .status(404)
        .send({ message: `User ${user.username} is not exists` });

    if (findUser.password !== user.password.trim())
      return resp.status(401).send({ message: `Password does not match` });

      // set the request as session authenticated request
      req.session.loggedin = true
      // set the session identity to the Current Login User
      req.session.name = user.username;
      console.log(` The Active session is ${req.session.name}`);
      return resp.status(200).send({
          message: `User ${user.username} is successfully Logged In`
      });
  }

  async getData(req, resp) {
console.log('in Get');
    console.log(`The Current User for the Active session is ${req.session.name}`);
    // if the user is not associated with session means it is 
    // unauthenticated so generate error response
    if(req.session.name === undefined)
        return resp.status(401).send({
            message: 'You are not authorized to access this resource please login'
        });

    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });

    let records = await department.findAll();
    // 3. send response
    if (records) {
      return resp
        .status(200)
        .send({ message: "Data is read successfully", data: records });
    }
    return resp
      .status(500)
      .send({ message: "Error Occurred while reading data" });
  }

  async logOff(req, resp) {
    console.log(`Current session for Logoff ${req.session.name}, the session is destroyed`);
    // destroy the session
    req.session.destroy();
    return resp
      .status(200)
      .send({ message: `The User has logged out successfully` });
  }
}

export default DataAccess;
