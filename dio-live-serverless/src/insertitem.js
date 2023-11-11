"user strict"

const {v4} = require("uuid");
const AWS = require("aws-sdk")

const insertitem = async(event) => {
    const {item} = JSON.parse(event.body);
    const createAt = new Date().toISOString();
    const id = v4();

    const dynamodb =  new AWS.DynamoDB.DocumentClient();

    const newItem = {
        id,
        item,
        createAt,
        ItemStatus: false
    }

    await dynamodb.put ({
            TableName:"ItemTableNew",
            Item: newItem
        }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(newItem)
    };

}

module.exports = {
    handler:insertitem
}