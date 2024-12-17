const { MongoClient } = require('mongodb');
const { program } = require('commander');
const fs = require('fs').promises;

const uri = 'mongodb://localhost:27017';
const dbName = 'auction_db';
const collectionName = 'auction_items';

async function connectToMongoDB() {
    try {
        const client = await MongoClient.connect(uri);
        return client;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

async function loadSeedData() {
    try {
        const data = await fs.readFile('seed-data.json', 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading seed data:', error);
        process.exit(1);
    }
}

program
    .version('1.0.0')
    .description('CLI tool for managing auction database');

program
    .command('seed')
    .description('Seed the database with initial data')
    .action(async () => {
        const client = await connectToMongoDB();
        try {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            
            const data = await loadSeedData();
            const result = await collection.insertMany(data.auction_items);
            
            console.log(`Successfully seeded ${result.insertedCount} auction items.`);
        } catch (error) {
            console.error('Error seeding database:', error);
        } finally {
            await client.close();
        }
    });

program
    .command('clear')
    .description('Clear all data from the database')
    .action(async () => {
        const client = await connectToMongoDB();
        try {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            
            const result = await collection.deleteMany({});
            console.log(`Successfully deleted ${result.deletedCount} auction items.`);
        } catch (error) {
            console.error('Error clearing database:', error);
        } finally {
            await client.close();
        }
    });

program
    .command('list')
    .description('List all auction items in the database')
    .action(async () => {
        const client = await connectToMongoDB();
        try {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            
            const items = await collection.find({}).toArray();
            items.forEach(item => {
                console.log('\n-------------------');
                console.log(`Title: ${item.title}`);
                console.log(`Description: ${item.description}`);
                console.log(`Start Price: $${item.start_price.toFixed(2)}`);
                console.log(`Reserve Price: $${item.reserve_price.toFixed(2)}`);
            });
        } catch (error) {
            console.error('Error listing items:', error);
        } finally {
            await client.close();
        }
    });

program.parse(process.argv);
