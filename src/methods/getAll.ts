/**
Get All entries from DB
@params tableName table
*/

const getAll = async function(tableName, cols, vals){

    let queryString;

    if(cols.length == 0 || vals.length ==0){
      queryString = `SELECT * FROM ${tableName}`;
    }
    else{
      queryString = `SELECT * FROM ${tableName} where (${cols}) = (${vals})`;
    }

    let connection = await this.mysql.createConnection(this.config);

    let [rows, fields] = await connection.execute(queryString);
    connection.end()


    return rows;
}

export default getAll
