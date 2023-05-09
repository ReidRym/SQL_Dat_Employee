const createTableQuery = `CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT NOT NULL
);`;
connection.query(createTableQuery, (error, result) => {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
    }
});