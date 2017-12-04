const mongo = require("mongodb").MongoClient;
const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/mumin";


let mongodb = {
	async find(criteria, projection, limit) {
		const db  = await mongo.connect(dsn);
		const col = await db.collection('crowd');
		const res = await col.find(criteria, projection).limit(limit).toArray();
		await db.close();

		return res;
	},

	async remove(query) {
	    const db  = await mongo.connect(dsn);
	    const col = await db.collection('crowd');
		const res = col.deleteOne(query)
	    await db.close();

		return res;
	},

	async save(idQuery, updateQuery) {
	    const db  = await mongo.connect(dsn);
	    const col = await db.collection('crowd');
		const res = col.updateOne(idQuery, {$set: updateQuery}, {upsert: true})
    	await db.close();

		return res;
	}
};


module.exports = mongodb;
