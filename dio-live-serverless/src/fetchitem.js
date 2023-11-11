"user strict"

const AWS = require("aws-sdk")

const fetchitem = async(event) => {
    
    const dynamodb =  new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;
    let produto;

    try {
        const result = await dynamodb.get({
            TableName: "ItemTableNew",
            Key: {id}
        }).promise();

        produto = result.Item;

    } catch(error) {
        console.log(error)
    }
   
    return {
        statusCode: 200,
        body: JSON.stringify(produto)
    };

}

module.exports = {
    handler:fetchitem
}