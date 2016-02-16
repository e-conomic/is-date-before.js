"use strict";
var expect = require("must")
var moment = require("moment")
var isDateBefore = require("../")

describe("is-time-before", function () {
  it("should understand moment objects", function () {
    var start = moment(0)
    var end = moment(1)
    expect(isDateBefore(start, end))
      .to.be.true()
    expect(isDateBefore(end, start))
      .to.be.false()
  })

  it("should understand pure numbers", function () {
    var start = 0
    var end = 1
    expect(isDateBefore(start, end))
      .to.be.true()
    expect(isDateBefore(end, start))
      .to.be.false()
  })

  it("should not accept invalid dates", function () {
    var start = NaN
    var end = 1
    expect(function () { isDateBefore(start, end) })
      .to.throw()
  })
})
