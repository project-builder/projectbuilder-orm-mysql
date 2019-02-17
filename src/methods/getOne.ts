const getOne = async function(tableName, id){

    let connection = await this.mysql.createConnection(this.config);

    let queryString = `SELECT * FROM ${tableName} WHERE id=?`;

    let queryValues = [id]

    let [rows, columns] = await connection.execute(queryString, queryValues);

    let [resultRow] = rows;

    return resultRow
}


export default getOne
