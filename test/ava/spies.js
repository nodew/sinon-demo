import test from 'ava'
import sinon from 'sinon'
import once from "../../utils/once"

test("calls the original function", t => {
  var spy = sinon.spy()
  var proxy = once(spy)
  proxy()
  t.true(spy.calledOnce)
  proxy()
  t.false(spy.calledTwice)
})
