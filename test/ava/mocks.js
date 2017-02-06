import test from 'ava'
import sinon from 'sinon'
import once from "../../utils/once"

test("returns the return value from the original function", t => {
    var myAPI = { method: function () {} }
    var mock = sinon.mock(myAPI)
    mock.expects("method").once().returns(42)

    var proxy = once(myAPI.method)

    t.is(proxy(), 42)
    mock.verify()
})
