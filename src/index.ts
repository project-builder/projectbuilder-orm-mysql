import * as mysql from 'mysql2/promise'
import * as index from './methods/index.js'

class mysqlORM{
  config: any;
  mysql: any;

  constructor(config){
      this.config = config
      this.mysql = mysql;
  }

  addOne = index.addOne;
  deleteOne = index.deleteOne;
  getAll = index.getAll;
  getOne = index.getOne;
  updateArrayInOne = index.updateArrayInOne;
  updateOne = index.updateOne;
	create = index.create;
  insertArrayInOne = index.insertArrayInOne;
  getSome = index.getSome;
}


export default mysqlORM
