const Cookies = require('js-cookie')

const SIP = {
  set: (name, value) => {
    Cookies.set(name, value)
  },
  get: name => {
    return Cookies.getJSON(name)
  },
  remove: name => {
    Cookies.remove(name)
  }
}

module.exports = SIP
