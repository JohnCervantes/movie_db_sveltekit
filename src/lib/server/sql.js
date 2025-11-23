export const execute = async (db, sql) => {
	return new Promise((resolve, reject) => {
		db.exec(sql, (err) => {
			if (err) reject(err);
			resolve();
		});
	});
};

export const db_all = async (db, sql, params = []) => {
	return new Promise((resolve, reject) => {
		db.all(sql, params, (err, rows) => {
			if (err) {
				return reject(err);
			}
			resolve(rows);
		});
	});
};

export const db_get = async (db, sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) {
				return reject(err);
			}
			resolve(row);
		});
	});
};

