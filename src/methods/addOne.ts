const addOne = async function(tableName, data){
    let connection = await this.mysql.createConnection(this.config);
    let cols = [];
    let vals = [];

    for (const key in data) {
        cols.push(key)
        if (typeof(data[key])==='string') {
            vals.push(`'${data[key]}'`)
        }
        else{
            vals.push(`${data[key]}`)
        }
    }


    let queryString = `INSERT INTO ${tableName} (${cols}) VALUES (${vals})`
    // let queryString = `INSERT INTO ${tableName} (${cols}) VALUES ()?)`;
    // let queryParams = vals;


    console.log(queryString);

    // console.log(queryParams);

    let [result] = await connection.execute(queryString, vals);

    return result.insertId

}

export default addOne
