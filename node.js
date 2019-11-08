const os = require('os')
const path = require('path')
const fs = require('fs')

const SIP = {
  set: (name, value) => {
    fs.writeFileSync(path.join(os.tmpdir(), name), JSON.stringify(value.toJSON()))
  },
  get: name => {
    const filePath = path.join(os.tmpdir(), name)
    if (!fs.existsSync(filePath)) {
      return undefined
    }
    return JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8' }))
  },
  remove: name => {
    const filePath = path.join(os.tmpdir(), name)
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath)
    }
  }
}

module.exports = SIP
