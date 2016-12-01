import { expect } from 'chai'
import sinon from 'sinon'

import { onHttpResponse, getTestable } from './dependency_injection'

describe('onHttpResponse', function () {
  let resolve;
  let reject;

  beforeEach(function () {
    resolve = sinon.spy()
    reject = sinon.spy()
  })

  it('should invoke resolve with the response text when the status is 200', function () {
    const handler = onHttpResponse(resolve, reject)
    handler({ status: 200, responseText: 'Hi' })
    
    expect(resolve.calledWith('Hi')).to.be.true
    expect(reject.called).to.be.false
  })

  it('should invoke reject if the status is not 200', function () {
    const handler = onHttpResponse(resolve, reject)
    handler({ status: 404, responseText: 'Nope' })
    
    expect(reject.calledWith(sinon.match({
      message: 'Status code was 404, not 200'
    }))).to.be.true
    expect(resolve.called).to.be.false
  })
})

describe('get', function () {
  it('should open and send an http request', function () {
    const fakeHttpRequest = {
      open: sinon.spy(),
      send: sinon.spy()
    }

    getTestable('hello_world', fakeHttpRequest)

    expect(fakeHttpRequest.open.calledWith('GET', 'hello_world'))
      .to.be.true
    
    expect(fakeHttpRequest.send.called)
      .to.be.true
  })
})
