const { createElement: h } = require('react')

const envoyKeys = Object.keys(require('../envoy-icons'))
const List = require('./List')
const Panel = require('./Panel')
const IconCard = require('./IconCard')

const total = envoyKeys.length

module.exports = () => (
  h('section', {},
    h('h2', {}, `${total} Icons`),
    h('p', {},
      h('span', {}, 'Made by Sze Wa and Amy'),
    ),
    h(Panel, {
      title: 'Envoy',
      open: true
    },
      h(List, {},
        envoyKeys.map((name, i) => (
          h(IconCard, { key: i, name })
        ))
      )
    )
  )
)

