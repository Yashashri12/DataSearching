const mongoose=require("mongoose");
const Ad = require("./models/ad.model");

const url="mongodb://localhost:27017";
const database ="Data";

mongoose.connect(url + '/' + database);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

async function getData(query)
{
    var response = await Ad.aggregate([
            {
                $match: {
                    $or: [
                        {primaryText: {$regex: query, $options: 'i'}},
                        {hedline: {$regex: query, $options: 'i'}},
                        {description: {$regex: query, $options: 'i'}},
                        {'company.name': {$regex: query, $options: 'i'}},
                        {'company.url': {$regex: query, $options: 'i'}},
                    ],
                }
            }
        ])
        .lookup({ from: 'companies', localField: 'companyId', foreignField: '_id', as: 'company' })
        .unwind('company')
        .exec();
    return response;
}

module.exports = getData;