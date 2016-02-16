"use strict";
var moment = require("moment")

module.exports = function (date, cutoff) {
  date = moment(date)
  cutoff = moment(cutoff)
  try {
    if (!date.isValid() || !cutoff.isValid()) {
      throw new Error("Invalid arguments")
    }
  } catch (err) {
    throw new Error("Time error: " + err)
  }
  return cutoff.diff(date) > 0
}
