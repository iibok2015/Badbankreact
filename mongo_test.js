const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/';

async function run() {
    try {
        const client = await MongoClient.connect(url);
        console.log('Connected!');
        const dbName = 'mrdon';
        const db = client.db(dbName);
        
        var name = 'user' + Math.floor(Math.random() * 10000);
        var email = name + '@mit.edu';
        
        var collection = db.collection('customers');
        var doc = {name, email};
        const result = await collection.insertOne(doc);
        console.log('Document inserted successfully:', result.insertedId);

        var customers = await collection.find()
        .toArray()
            console.log('Collection:', customers);

        client.close();
        
    } catch (err) {
        console.error('Error: ', err);
    }
}

run();
