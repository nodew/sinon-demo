import sinon from 'sinon'
import jQuery from 'jquery'
import assert from 'assert'

function getTodos(listId, callback) {
  jQuery.ajax({
    url: "/todo/" + listId + "/items",
    success: function (data) {
      callback(null, data)
    }
  })
}

describe('FakeXMLHttpRequest', () => {
  var xhr, requests
  before(function () {
    xhr = sinon.useFakeXMLHttpRequest()
    requests = []
    xhr.onCreate = function (req) {
      requests.push(req)
    }
  })

  it("makes a GET request for todo items", (done) => {
    getTodos(42, sinon.spy())
    assert(requests.length === 1)
    assert(requests[0].url === "/todo/42/items")
    done()
  })

  after(function () {
    // Like before we must clean up when tampering with globals.
    xhr.restore()
  })
})
