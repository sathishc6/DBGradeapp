// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

// const app = express();
// const PORT = 4000;
// const getPort = require('get-port');

// app.use(bodyParser.json());

// // MySQL connection configuration
// const dbConfig = {
//   host: 'localhost',  // or your MySQL server host
//   user: 'root',
//   password: 'root',
//   database: 'Grades'
// };

// const connection = mysql.createConnection(dbConfig);

// // Connect to MySQL
// connection.connect(error => {
//   if (error) {
//     console.error('Error connecting to MySQL:', error.message);
//     return;
//   }
//   console.log('Connected to MySQL database');

//   // Create table if it doesn't exist
//   const createTableQuery = `
//     CREATE TABLE IF NOT EXISTS userGrades (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       course_name VARCHAR(255),
//       org_id INT,
//       displayed_grade VARCHAR(255)
//     )
//   `;

//   connection.query(createTableQuery, (err, result) => {
//     if (err) {
//       console.error('Error creating table:', err.message);
//       return;
//     }
//     console.log('Table created or already exists');
//   });
// });

// // Endpoint to store data
// app.post('/store_data', (req, res) => {
//   const { course_name, org_id, displayed_grade } = req.body;

//   const sql = 'INSERT INTO userGrades (course_name, org_id, displayed_grade) VALUES (?, ?, ?)';
//   const values = [course_name, org_id, displayed_grade];

//   connection.query(sql, values, (err, result) => {
//     if (err) {
//       console.error('Error inserting data into MySQL:', err.message);
//       res.json({ status: 'error', message: err.message });
//       return;
//     }
//     res.json({ status: 'success', message: 'Data inserted successfully' });
//   });
// });



// async function startServer() {
//     const port = await getPort({ port: 3000 }); // Try port 3000 first, or use any available port

//     app.listen(port, () => {
//         console.log(`Server is running on http://localhost:${port}`);
//     });
// }

// startServer();

// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });

// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

// const app = express();
// const PORT = 4000;

// app.use(bodyParser.json());

// // MySQL connection configuration
// const dbConfig = {
//   host: 'localhost',  // or your MySQL server host
//   user: 'root',
//   password: 'root',
//   database: 'Grades'
// };

// const connection = mysql.createConnection(dbConfig);

// // Connect to MySQL
// connection.connect(error => {
//   if (error) {
//     console.error('Error connecting to MySQL:', error.message);
//     return;
//   }
//   console.log('Connected to MySQL database');

//   // Create table if it doesn't exist
//   const createTableQuery = `
//     CREATE TABLE IF NOT EXISTS userGrades (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       course_name VARCHAR(255),
//       org_id INT,
//       displayed_grade VARCHAR(255)
//     )
//   `;

//   connection.query(createTableQuery, (err, result) => {
//     if (err) {
//       console.error('Error creating table:', err.message);
//       return;
//     }
//     console.log('Table created or already exists');
//   });
// });

// // Endpoint to store data
// app.post('/store_data', (req, res) => {
//   const { course_name, org_id, displayed_grade } = req.body;

//   const sql = 'INSERT INTO userGrades (course_name, org_id, displayed_grade) VALUES (?, ?, ?)';
//   const values = [course_name, org_id, displayed_grade];

//   connection.query(sql, values, (err, result) => {
//     if (err) {
//       console.error('Error inserting data into MySQL:', err.message);
//       res.json({ status: 'error', message: err.message });
//       return;
//     }
//     res.json({ status: 'success', message: 'Data inserted successfully' });
//   });
// });

// (async () => {
//   const getPort = await import('get-port').then(module => module.default);

//   async function startServer() {
//     const port = await getPort({ port: 4000 }); // Try port 3000 first, or use any available port

//     app.listen(port, () => {
//       console.log(`Server is running on http://localhost:${port}`);
//     });
//   }

//   startServer();
// })();

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

// MySQL connection configuration
const dbConfig = {
  host: 'localhost',  // or your MySQL server host
  user: 'root',
  password: 'root',
  database: 'Grades'
};

const connection = mysql.createConnection(dbConfig);

// Connect to MySQL
connection.connect(error => {
  if (error) {
    console.error('Error connecting to MySQL:', error.message);
    console.error('Error code:', error.code);
    console.error('Error fatal:', error.fatal);
    return;
  }
  console.log('Connected to MySQL database');

  // Create table if it doesn't exist
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS userGrades (
      id INT AUTO_INCREMENT PRIMARY KEY,
      course_name VARCHAR(255),
      org_id INT,
      displayed_grade VARCHAR(255)
    )
  `;

  connection.query(createTableQuery, (err, result) => {
    if (err) {
      console.error('Error creating table:', err.message);
      return;
    }
    console.log('Table created or already exists');
  });
});

// Endpoint to store data
app.post('/store_data', (req, res) => {
  const { course_name, org_id, displayed_grade } = req.body;

  const sql = 'INSERT INTO userGrades (course_name, org_id, displayed_grade) VALUES (?, ?, ?)';
  const values = [course_name, org_id, displayed_grade];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into MySQL:', err.message);
      res.json({ status: 'error', message: err.message });
      return;
    }
    res.json({ status: 'success', message: 'Data inserted successfully' });
  });
});

(async () => {
  const getPort = await import('get-port').then(module => module.default);

  async function startServer() {
    const port = await getPort({ port: 4000 }); // Try port 3000 first, or use any available port

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }

  startServer();
})();
