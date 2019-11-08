const os = require('os')
const path = require('path')
const fs = require('fs')

const SIP = {
  set: (name, value) => {
    fs.writeFileSync(path.join(os.tempdir(), name), value)
  },
  get: name => {
    return JSON.parse(fs.readFileSync(path.join(os.tempdir(), name), { encoding: 'utf-8' }))
  },
  remove: name => {
    if (fs.existsSync(path.join(os.tempdir(), name))) {
      fs.unlinkSync(path.join(os.tempdir(), name))
    }
  }
}

module.exports = SIP
