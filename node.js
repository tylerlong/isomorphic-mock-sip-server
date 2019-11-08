const os = require('os')
const path = require('path')
const fs = require('fs')

const SIP = {
  set: (name, value) => {
    fs.writeFileSync(path.join(os.tmpdir(), name), value)
  },
  get: name => {
    return JSON.parse(fs.readFileSync(path.join(os.tmpdir(), name), { encoding: 'utf-8' }))
  },
  remove: name => {
    if (fs.existsSync(path.join(os.tmpdir(), name))) {
      fs.unlinkSync(path.join(os.tmpdir(), name))
    }
  }
}

module.exports = SIP
