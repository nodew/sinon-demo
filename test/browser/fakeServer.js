import sinon from 'sinon'
import jQuery from 'jquery'
import assert from 'assert'

function getTodos(listId, callback) {
  jQuery.ajax({
    url: "/todo/" + listId + "/items",
    success: (data) => {
      callback(null, data)
    }
  })
}

describe("fakeServer", () => {
  var server
  before(() => {
    server = sinon.fakeServer.create()
    server.respondWith(
      "GET",
      /\/todo\/(\d+)\/items/,
      (xhr, listId) => {
        xhr.respond(
          200,
          {"Content-Type": "application/json"},
          JSON.stringify({
            id: +listId,
            text: "Provide examples",
            done: true
          })
        )
      }
    )
  })

  after(() => {
    server.restore()
  })

  it("calls callback with deserialized data", (done) => {
    var callback = sinon.spy()
    getTodos(42, callback)
    server.respond()
    assert(callback.calledOnce)
    assert(callback.calledWith(null, {id: 42, text: "Provide examples", done: true}))
    done()
  })
})
