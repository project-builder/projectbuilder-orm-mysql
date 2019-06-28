const updateOne = async function(tableName, id, data){

  let parseUpdateString = (dataString) => {
    if (typeof(dataString)==='string') {
      return `'${dataString}'`
    }

    else if (Array.isArray(dataString)) {
      return `'["${dataString}"]'`
    }

    else {
      return `${dataString}`
    }
  }

  let connection = await this.mysql.createConnection(this.config);

  let updateStatement = [];

  for (const key in data) {
    updateStatement.push(`${key} = ${parseUpdateString(data[key])}`);
  }

  let queryString = `UPDATE ${tableName} SET ${updateStatement} WHERE id=${id}`

  let [rows, fields] = await connection.execute(queryString);

  connection.end()

  return id

}

export default updateOne;
