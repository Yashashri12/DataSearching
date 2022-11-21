const{ MongoClient}=require("mongodb");
//const MongoClient=require("mongodb");
const url="mongodb://localhost:27017";
const database ="Data";
const client = new MongoClient(url);

async function getData(query)
{
    let result=await client.connect();
    let db=result.db(database);
    let collection=db.collection("ads");
    let response=await collection
        .aggregate([
            {
                $match: {
                    $or: [
                        {primaryText: {$regex: query, $options: 'i'}},
                        {hedline: {$regex: query, $options: 'i'}},
                        {description: {$regex: query, $options: 'i'}},
                        {'company.name': {$regex: query, $options: 'i'}},
                        {'company.url': {$regex: query, $options: 'i'}},
                    ],
                },
            },
            {
                $lookup: {
                    from: 'companies',
                    localField: 'companyId',
                    foreignField: '_id',
                    as: 'company'
                }
            }, {
                $unwind: "$company"
            }
        ])  
 
    
        
        .toArray();
    return response;
}

module.exports = getData;