const once = (fn) => {
  var returnValue, called = false
  return function () {
    if (!called) {
      called = true
      returnValue = fn.apply(this, arguments)
    }
    return returnValue
  }
}

export default once
