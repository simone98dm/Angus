/**
 * Created by Simone Dal Mas
 * Date: 01/05/2018
 * Description: API for authentication on the dashboard
 */
var app = require("express")();
const mysql = require("mysql");
const config = require("./config");
var cors = require("cors");
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
var verifyToken = require("./verify");
var port = 3000;

app.use(cors()); //enable middleware cors
app.use(bodyParser.json()); //enable middleware bodyParser

/**
 * Create new authorization token which is composed by 2 identifier
 * for the profile (id and email).
 * This API create the connection to the database MYSQL and get the
 * identifier. If something went wrong it returns the 401 page.
 * After the retriving the API create a new JWT token and return it.
 */
app.post("/api/user", (req, res) => {
  let connection = mysql.createConnection({
    host: config.hostname,
    user: config.username,
    password: config.password,
    database: config.db_name
  });
  connection.connect();
  connection.query(
    `SELECT accounts.id, accounts.email 
    FROM shadow JOIN accounts ON shadow.id=accounts.id 
    WHERE email = ? AND passwd = PASSWORD( ? );`,
    [req.body.email, req.body.password],
    (error, result, fields) => {
      connection.end();
      // if
      if (error) throw error;
      // else
      if (result.length <= 0) {
        // sign-in failed ;(
        return res
          .status(401)
          .json({
            auth: false
          })
          .end();
      } else {
        //sign-in done ;)
        var token = jwt.sign(
          {
            id: result[0].id,
            email: result[0].email
          },
          config.secret,
          {
            expiresIn: 86400 //tempo di validazione del token
          }
        );
        return res
          .status(200)
          .json({
            auth: true,
            token: token
          })
          .end();
      }
    }
  );
});

/**
 * Allow to retrive all the user information from the server, the info
 * are used only to visualize them to the setting view and allow to
 * change them. The information retrived doesn't contains any password
 * or sensitive information. To check if is a user which try to retrive
 * the information is used a middleware called: verifyToken which check
 * if the token is right created
 */
app.get("/api/user", verifyToken, (req, res) => {
  let connection = mysql.createConnection({
    host: config.hostname,
    user: config.username,
    password: config.password,
    database: config.db_name
  });
  connection.connect();
  connection.query(
    `SELECT accounts.id, accounts.username, accounts.name, accounts.surname, accounts.email, accounts.grade, accounts.profileImg   
    FROM accounts 
    WHERE accounts.email = ? AND accounts.id = ?;`,
    [req.userEmail, req.userId],
    (error, result, fields) => {
      connection.end();
      //if
      if (error) throw error;
      //else
      if (result.length <= 0) {
        return res.status(401).end();
      } else {
        return res.status(200).send({
          auth: true,
          username: result[0].username,
          name: result[0].name,
          surname: result[0].surname,
          email: result[0].email,
          grade: result[0].grade,
          profileImg: result[0].profileImg
        });
      }
    }
  );
});

app.get("/api/line/:id", verifyToken, (req, res) => {
  //SELECT * FROM establishments JOIN production_lines ON establishments.id = production_lines.establishment_id JOIN machines ON machines.production_line_id = production_lines.id JOIN sensors ON sensors.machine_id = machines.id;
  let connection = mysql.createConnection({
    host: config.hostname,
    user: config.username,
    password: config.password,
    database: config.db_name
  });
  connection.connect();
  connection.query(
      `SELECT accounts.id, accounts.username, accounts.name, accounts.surname, accounts.email, accounts.grade, accounts.profileImg   
    FROM accounts 
    WHERE accounts.email = ? AND accounts.id = ?;`,
    [req.userEmail, req.userId],
    (error, result, fields) => {
      connection.end();
      //if
      if (error) throw error;
      //else
      if (result.length <= 0) {
        return res.status(401).end();
      } else {
        return res.status(200).send({
          auth: true,
          username: result[0].username,
          name: result[0].name,
          surname: result[0].surname,
          email: result[0].email,
          grade: result[0].grade,
          profileImg: result[0].profileImg
        });
      }
    }
  );
});

/**
 * Start the server
 */
app.listen(port, () => {
  console.log("Listening on: http://localhost:" + port);
});
