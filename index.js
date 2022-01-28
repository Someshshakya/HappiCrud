'use strict'
// require the dotev
require('dotenv').config({ path: '.env' })

const type = process.env.PROCESS_TYPE
if (type === 'web') {
  require('./web')
} else if (type === 'worker') {
  require('./worker')
} else {
  throw new Error(`${type} is an unsupported process type.`)
}
