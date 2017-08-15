module.exports = function(sequelize, DataTypes) {
	let Burger = sequelize.define("Burger", {
		burger_name: DataTypes.STRING,
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});
	return Burger;
};

/*let burger = {
	selectAll: (cb) => {
		orm.selectAll("burgers", res => {
			cb(res);
		});
	},
	insertOne: (col, val, cb) => {
		orm.insertOne("burgers", col, val, res => {
			cb(res);
		});
	},
	updateOne: (newColVal, condition, cb) => {
		orm.updateOne("burgers", newColVal, condition, res => {
			cb(res);
		});
	}
};*/