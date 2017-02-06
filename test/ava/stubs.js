import test from 'ava'
import sinon from 'sinon'
import once from "../../utils/once"

test("returns the return value from the original function", t => {
  var stub = sinon.stub().returns(42)
  var proxy = once(stub)
  t.is(proxy(), 42)
})
