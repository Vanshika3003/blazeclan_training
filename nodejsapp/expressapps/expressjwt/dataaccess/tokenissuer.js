// 1. Import dependencies
import { Sequelize } from "sequelize";

import jsonwebtoken from "jsonwebtoken";

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

// lets define signature
const jwtSettings = {
  jwtSecret: "msit007700itms",
};

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
    let user = req.body;
    // 2. check for authentication
    // 2a. Check is user exists
    let findUser = await users.findOne({ where: { username: user.username } });
    if (findUser === null)
      return resp
        .status(404)
        .send({ message: `User ${user.username} is not exists` });
    // 2b. Check for the password
    if (findUser.password !== user.password.trim())
      return resp.status(401).send({ message: `Password does not match` });

    // 3. Authenticate the user and issue token
    // do not pass the password
    const token = jsonwebtoken.sign({ user }, jwtSettings.jwtSecret, {
      expiresIn: 3600, // 1 hr
      algorithm: "HS384",
    });
    // 4. return token to client
    resp.status(200).send({
      message: `User ${user.username} is successfully authenticated`,
      token: token,
    });
  }

  // verify the token and then send response
  async getData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. check for authentication
    let user = req.body;
    // 2a. check if the request has the authorization header
    if (!req.headers.authorization) {
      return resp
        .status(400)
        .send({ message: "Request is missing the headers info" });
    }

    // 2b. Read the Headers data

    let headers = req.headers.authorization; // Bearer Token-Value
    // 2c. split header value
    let receivedToken = headers.split(" ")[1]; // Bearer Token-Value, [1] means a token value
    console.log(` ${receivedToken}`);

    // 2d. Lets verify the token
    // Parameter 1: Token
    // Parameter 2: The Secret aka Signature
    // Parameter 3: The Decode callback for success or failure of token verification
    await jsonwebtoken.verify(
      receivedToken,
      jwtSettings.jwtSecret,
      async (error, decode) => {
        if (error) {
          return resp
            .status(401)
            .send({ message: `The Identity Verification Failed` });
        }
        console.log(`Decode = ${JSON.stringify(decode)}`);
        // 3. read all records
        // inform the Hosting server that the current token is validated and successfully decoded+
        // the decode contains the Token Information like, Payload (identity info, roles, etc.) and expiry
        // We can use the payload info to decide whether to process the request
        req.decode = decode;
        if(decode.user.username === "user2")
            return resp.status(401).send({message: `The current user does not have any access`});
        let records = await department.findAll();
        // 3. send response
        if (records) {
          return resp
            .status(200)
            .send({ message: "Data is read successfully", data: records });
        } else {
          return resp
            .status(500)
            .send({ message: "Error Occurred while reading data" });
        }
      }
    );
  }
}

export default DataAccess;
