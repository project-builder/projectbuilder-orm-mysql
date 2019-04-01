const updateArrayInOne = async function(tableName, id, data){
  let updateStatement = [];

  for (const key in data) {
    data[key].forEach((e) => {
      updateStatement.push(`${key} = JSON_ARRAY_APPEND(${key}, "$", '${e}')`);
    })
  }

  let queryString = `UPDATE ${tableName} SET ${updateStatement} WHERE id=${id}`

  console.log('queryString', queryString);

  let connection = await this.mysql.createConnection(this.config);

  let [rows, fields] = await connection.execute(queryString);
    connection.end()



console.log('rs', rows);

  return rows

}


export default updateArrayInOne;
