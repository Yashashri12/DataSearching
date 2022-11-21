const {MongoClient}=require("mongodb");
const url ="mongodb://localhost:27017";

const client = new MongoClient(url);


async function dbConnect(dbName,collectionName){
    let res=await client.connect();
    db=res.db(dbName);
    return db.collection(collectionName);
}
module.exports=dbConnect;