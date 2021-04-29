const assert = require('chai').assert
const createRequest = require('../index.js').createRequest

describe('createRequest', () => {
  const jobID = '1'

  context('successful calls', () => {
    const requests = [
      { name: 'id not supplied', testData: { data: { action: 'label', image_url: 'https://deepverse.co.uk/img/orca.jpg' } } },
      { name: 'label', testData: { id: jobID, data: { action: 'label', image_url: 'https://deepverse.co.uk/img/orca.jpg' } } },
      { name: 'confidence', testData: { id: jobID, data: { action: 'confidence', image_url: 'https://deepverse.co.uk/img/orca.jpg' } } },
      { name: 'image_url/picture', testData: { id: jobID, data: { from: '' } } },
    ]

    requests.forEach(req => {
      it(`${req.name}`, (done) => {
        createRequest(req.testData, (statusCode, data) => {
          assert.equal(statusCode, 200)
          assert.equal(data.jobRunID, jobID)
          assert.isNotEmpty(data.data)
          assert.isAbove(Number(data.result), 0)
          assert.isAbove(Number(data.data.result), 0)
          done()
        })
      })
    })
  })

  context('error calls', () => {
    const requests = [
      { name: 'empty body', testData: {} },
      { name: 'empty data', testData: { data: {} } },
      { name: 'unknown image', testData: { id: jobID, data: { image_url: 'not_real' } } }
    ]

    requests.forEach(req => {
      it(`${req.name}`, (done) => {
        createRequest(req.testData, (statusCode, data) => {
          assert.equal(statusCode, 500)
          assert.equal(data.jobRunID, jobID)
          assert.equal(data.status, 'errored')
          assert.isNotEmpty(data.error)
          done()
        })
      })
    })
  })
})
