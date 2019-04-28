// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
// console.log(id)
// console.log(id.toHexString().length)



MongoClient.connect(connectionURL, { useNewUrlParser:true}, (err, client) => {
	if(err) {
		return console.log('Unable to connect to database')
	}

	const db = client.db(databaseName)

	// Return the first one correct
	// db.collection('users').findOne({name:'Jen'}, (err, user) => {
	// 	if(err) {
	// 		return console.log('Unable to fetch')
	// 	}

	// 	console.log(user)
	// })

	// db.collection('users').find({age:27}).toArray((err, users) => {
	// 	console.log(users)
	// })

	// db.collection('users').find({age:27}).count((err, count) => {
	// 	console.log(count)
	// })

	// Update
	// const updatePromise = db.collection('users').updateOne({
	// 	_id: new ObjectID("5cb431915c3425f14f393a02")
	// }, {
	// 	$inc:{
	// 		age:1
	// 	}
	// })
	// updatePromise.then((result) => {
	// 	console.log(result)
	// }).catch((error) => {
	// 	console.log(error)
	// })

	// UpdateMany
	// db.collection('tasks').updateMany({
	// 	completed:false
	// }, {
	// 	$set: {
	// 		completed:true
	// 	}
	// }).then((result) => {
	// 	console.log(result.modifiedCount)
	// }).catch((error) => {
	// 	console.log(error)
	// }) 

	// Delete Many
	// db.collection('users').deleteMany({
	// 	age:27
	// }).then((result) => {
	// 	console.log(result)
	// }).catch((error) => {
	// 	console.log(error)
	// })

	// Delete One 
	db.collection('tasks').deleteOne({
		description:"Clean the house"
	}).then((result) => {
		console.log(result)
	}).catch((error) => {
		console.log(error)
	})
})

