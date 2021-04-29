const { Requester, Validator } = require('@chainlink/external-adapter')
require('dotenv').config()
var appid = process.env.API_KEY

// Define custom error scenarios for the API.
// Return true for the adapter to retry.
const customError = (data) => {
  if (data.Response === 'Error') return true
  return false
}

// Define custom parameters to be used by the adapter.
// Extra parameters can be stated in the extra object,
// with a Boolean value indicating whether or not they
// should be required.
const customParams = {
  action: ['action'],
  image_url: ['image_url', 'picture'],
  endpoint: false
}

const createRequest = (input, callback) => {
  // The Validator helps you validate the Chainlink request data
  const validator = new Validator(callback, input, customParams)
  const jobRunID = validator.validated.id
  const action = validator.validated.data.action;
  const endpoint = validator.validated.data.endpoint || 'tags'
  // const appid = process.env.API_KEY;
  const url = `https://${appid}@api.imagga.com/v2/${endpoint}`
  const image_url = validator.validated.data.image_url

  const params = {
    image_url
  }

  // This is where you would add method and headers
  // you can add method like GET or POST and add it to the config
  // The default is GET requests
  // method = 'get' 
  // headers = 'headers.....'
  const config = {
    url,
    params,
  }

  // The Requester allows API calls be retry in case of timeout
  // or connection failure
  Requester.request(config, customError)
  .then(response => {
    if (action=='label') {
      response.data.result = response.data.result.tags[0].tag.en
    } else if (action=='confidence') {
      response.data.result = Requester.validateResultNumber(response.data, ['result','tags',0,'confidence'])
    }
    callback(response.status, Requester.success(jobRunID, response))
    // console.log(response.data);
  })
  .catch(error => {
    callback(500, Requester.errored(jobRunID, error))
  })
}

// This is a wrapper to allow the function to work with
// GCP Functions
exports.gcpservice = (req, res) => {
  createRequest(req.body, (statusCode, data) => {
    res.status(statusCode).send(data)
  })
}

// This is a wrapper to allow the function to work with
// AWS Lambda
exports.handler = (event, context, callback) => {
  createRequest(event, (statusCode, data) => {
    callback(null, data)
  })
}

// This is a wrapper to allow the function to work with
// newer AWS Lambda implementations
exports.handlerv2 = (event, context, callback) => {
  createRequest(JSON.parse(event.body), (statusCode, data) => {
    callback(null, {
      statusCode: statusCode,
      body: JSON.stringify(data),
      isBase64Encoded: false
    })
  })
}

// This allows the function to be exported for testing
// or for running in express
module.exports.createRequest = createRequest
