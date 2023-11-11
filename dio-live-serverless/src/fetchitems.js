"user strict"

const {v4} = require("uuid")
const AWS = require("aws-sdk")

const fetchitems = async(event) => {
    
    const dynamodb =  new AWS.DynamoDB.DocumentClient();
    let produtos;

    try {
        const results = await dynamodb.scan({
            TableName: "ItemTableNew"
        }).promise() ;

        produtos = results.Items

    } catch(error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(produtos)
    };

}

module.exports = {
    handler:fetchitems
}