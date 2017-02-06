import test from 'ava'
import sinon from 'sinon'
import throttle from "../../utils/throttle"

var clock

test.before(function () { clock = sinon.useFakeTimers() })

test("calls callback after 100ms", t => {
  var callback = sinon.spy()
  var throttled = throttle(callback)

  throttled()

  clock.tick(99)
  t.true(callback.notCalled)

  clock.tick(1)
  t.true(callback.calledOnce)
})

test.after(function () { clock.restore() })
