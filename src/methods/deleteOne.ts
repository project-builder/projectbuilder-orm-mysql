const deleteOne = async function(tableName, id){
  console.log('delteSQL');
    let connection = await this.mysql.createConnection(this.config);

    let queryString = `DELETE FROM ${tableName} WHERE id=${id}`


    console.log(queryString);

    let result = await connection.execute(queryString);
    connection.end()


    return result
}

export default deleteOne
