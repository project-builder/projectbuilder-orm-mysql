const create = async function(tableName, columns){
	let connection = await this.mysql.createConnection(this.config);
	let descriptions = [];

	let Filestring = ''

	if (columns.files){
		 Filestring  = `files JSON DEFAULT NULL,`
		 // Filestring  = `files JSON DEFAULT (JSON_ARRAY()),`
	}

for (let key in columns.data) {
	let rowDescpript = {}
	rowDescpript.name = key;

	if(columns.data[key].required === true){
		rowDescpript.required = 'NOT NULL'
	}

	if(columns.data[key].type === 'string'){
		rowDescpript.type = 'VARCHAR(255)'
	}

	if(columns.data[key].autoGenerated === true){
		rowDescpript.auto = 'AUTO_INCREMENT'
	}

	descriptions.push(rowDescpript)
}

const isValue = (val) =>{
	if(typeof(val) != 'undefined'){
		return val
	}
	else return ''
}

let describeRows = (descriptions) =>{
	let qry = ''
	descriptions.forEach((row) =>{
	 let str = `${row.name} ${row.type} ${isValue(row.required)} ${isValue(row.auto)},`
	 qry += str
	})
	return qry
}

let queryString =
	`	create table if not exists ${tableName}(
	  id INT NOT NULL AUTO_INCREMENT,
		${describeRows(descriptions)}
		${Filestring}
	  PRIMARY KEY (id)
	);`

	console.log('#################################');
	console.log(queryString);
	console.log('#################################');


 let result = await connection.execute(queryString);

	if(result){
		console.log(`Succesfully created table ${tableName}`);
	}

}


export default create
