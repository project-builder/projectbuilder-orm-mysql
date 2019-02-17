/**
Get All entries from DB
@params tableName table
*/


const getSome = async function(tableName, column, cols, vals ){
    console.log('new GetSome SQL', tableName);

        let queryString;

        if(cols.length == 0 || vals.length ==0){
              queryString = `SELECT id, ${column} FROM ${tableName}  `;

          // queryString = `SELECT * FROM ${tableName}`;

        }
        else{
            queryString = `SELECT id, ${column} FROM ${tableName} where (${cols}) = (${vals}) `;

          // queryString = `SELECT * FROM ${tableName} where (${cols}) = (${vals})`;

        }


    // let queryString = `SELECT * FROM ?`;
    // let queryString = `SELECT id, ${column} FROM ${tableName}  `;

    // let queryValues = [`${tableName}`]
    let connection = await this.mysql.createConnection(this.config);

    // console.log(queryString, queryValues);

    let [rows, fields] = await connection.execute(queryString);

  console.log('rows', rows)

    // let [rows, fields] = await connection.execute(queryString, queryValues)

    return rows;
}

export default getSome
