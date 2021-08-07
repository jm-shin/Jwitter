import MongoDB from 'mongodb';
import {config} from '../config.js'

export function connectMongoDB() {
    return MongoDB.MongoClient.connect(config.mongo.host, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}