const updateOne = async function(tableName, id, data){

  let parseUpdateString = (dataString) => {
    console.log(dataString);
    console.log(typeof(dataString));


    if (typeof(dataString)==='string') {
      return `'${dataString}'`
    }

    else if (Array.isArray(dataString)) {
      // console.log('EYBAL');
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

    // console.log('queryString', queryString);

    let [rows, fields] = await connection.execute(queryString);
    //
    // console.log('RRR', rows);
    // console.log('FFF', fields);

    return id


}

export default updateOne;
