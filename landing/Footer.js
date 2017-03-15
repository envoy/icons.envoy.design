
const { createElement: h } = require('react')

module.exports = () => (
  h('footer', {
    style: {
      paddingTop: '3rem',
      paddingBottom: '3rem',
    }
  },
    h('p', {},
      h('a', {
        href: 'https://github.com/envoy/icons.envoy.design'
      }, 'GitHub'),
      h('span', {}, ' '),
      h('a', {
        href: 'https://github.com/jxnblk/microicon'
      }, 'Forked from microicon'),
      h('span', {}, ' '),
      h('a', {
        href: 'https://zeit.co/now'
      }, 'Hosted on Now')
    )
  )
)

