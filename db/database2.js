// import MongoDB from 'mongodb';
import Mongoose from 'mongoose';
import { config } from '../config.js'

export function connectMongoDB() {
    return Mongoose.connect(config.mongo.host, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
}

export function useVirtualId(schema) {
    schema.virtual('id').get(function () {
        return this._id.toString();
    });
    schema.set('toJSON', { virtuals: true });
    schema.set('toOject', { virtuals: true });
}

let db;
export function getTweets() {
    return db.collection('tweets');
}