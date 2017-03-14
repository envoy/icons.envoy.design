
const { createElement: h } = require('react')
const relineKeys = require('../reline-keys')
const geomiconsKeys = require('../geomicons-keys')
const simpleKeys = Object.keys(require('../simple-icons'))
const mdKeys = Object.keys(require('../material-design-icons'))
const envoyKeys = Object.keys(require('../envoy-icons'))
const Pre = require('./Pre')

const keys = [
  ...relineKeys,
  ...geomiconsKeys,
  ...simpleKeys,
  ...mdKeys,
  ...envoyKeys
]

const len = keys.length

module.exports = () => {
  const i = Math.floor((Math.random() * (len + 1)))
  const icon = keys[i] || 'x'

  return (
    h('img', {
      width: 64,
      height: 64,
      style: {
        display: 'block',
        marginRight: 32
      },
      src: `/${icon}/64`
    })
  )
}

