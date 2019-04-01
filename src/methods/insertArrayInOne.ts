const insertArrayInOne = async function(tableName, id, data){

  let updateStatement = [];

  let parseUpdateString = (dataString) => {

    let parsed = [];

      dataString.forEach((e) => {
        parsed.push(`"${e}"`);
      })

    return `'[${parsed}]'`

  }

  for (const key in data) {
    updateStatement.push(`${key} = ${parseUpdateString(data[key])}`);
  }


  let queryString = `UPDATE ${tableName} SET ${updateStatement} WHERE id=${id}`

  console.log('queryString', queryString);

  let connection = await this.mysql.createConnection(this.config);

  let [rows, fields] = await connection.execute(queryString);
    connection.end()


  return rows

}

export default insertArrayInOne;
