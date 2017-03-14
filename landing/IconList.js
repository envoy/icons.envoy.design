
const { createElement: h } = require('react')

const relineKeys = require('../reline-keys')
const geomiconsKeys = require('../geomicons-keys')
const simpleKeys = Object.keys(require('../simple-icons'))
const mdKeys = Object.keys(require('../material-design-icons'))
const envoyKeys = Object.keys(require('../envoy-icons'))
const List = require('./List')
const Panel = require('./Panel')
const IconCard = require('./IconCard')

const total = relineKeys.length
  + geomiconsKeys.length
  + simpleKeys.length
  + mdKeys.length

module.exports = () => (
  h('section', {},
    h('h2', {}, `${total} Icons`),
    h('p', {},
      h('span', {}, 'Includes icons from '),
      h('a', { href: 'https://github.com/google/material-design-icons' }, 'Material Design'),
      h('span', {}, ', '),
      h('a', { href: 'https://github.com/danleech/simple-icons' }, 'Simple Icons'),
      h('span', {}, ', '),
      h('a', { href: 'https://github.com/jxnblk/geomicons-open' }, 'Geomicons'),
      h('span', {}, ', and '),
      h('a', { href: 'https://github.com/jxnblk/reline' }, 'Reline'),
      h('span', {}, '. ')
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
    ),
    h(Panel, {
      title: 'Reline'
    },
      h(List, {},
        relineKeys.map((name, i) => (
          h(IconCard, { key: i, name })
        ))
      )
    ),
    h(Panel, {
      title: 'Geomicons'
    },
      h(List, {},
        geomiconsKeys.map((name, i) => (
          h(IconCard, { key: i, name })
        ))
      )
    ),
    h(Panel, {
      title: 'Material Design'
    },
      h(List, {},
        mdKeys.map((name, i) => (
          h(IconCard, { key: i, name })
        ))
      )
    ),
    h(Panel, {
      title: 'Simple Icons'
    },
      h(List, {},
        simpleKeys.map((name, i) => (
          h(IconCard, { key: i, name })
        ))
      )
    )
  )
)

