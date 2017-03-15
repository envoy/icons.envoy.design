const { createElement: h } = require('react')
const Demo = require('./Demo')

module.exports = () => (
  h('header', {
    style: {
      marginBottom: '3rem'
    }
  },
    h('div', {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    },
      h(Demo),
      h('div', {
        style: {
          marginRight: 32,
          marginTop: 32,
          marginBottom: 32,
        }
      },
        h('h1', { style: { margin: 0 } }, 'icons.envoy.design'),
        h('p', { style: { margin: 0 } }, 'SVG icon microservice')
      )
    )
  )
)

