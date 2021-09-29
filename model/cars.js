const db = require('../db');

async function getCars() {
  const { rows } = await db.query('SELECT * FROM cars');
  return {
    code: 200,
    data: rows,
  };
}

async function changeStatusCar(id,status) {
  const { rows } = await db.query(`UPDATE cars SET status = ${status} where id=${id}`);
  return {
    code: 200,
    data: rows,
  };
}


module.exports ={getCars}
