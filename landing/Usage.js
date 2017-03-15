
const { createElement: h } = require('react')
const Pre = require('./Pre')

module.exports = () => (
  h('section', { id: 'usage' },
    h('h2', {}, 'Usage'),
    h('img', {
      src: '/hot-air-balloon/',
      alt: 'hot air balloon icon'
    }),
    h(Pre, {}, `<img src='https://icons.envoy.design/hot-air-balloon' alt='hot air balloon icon' />`),
    h('h3', {}, 'Size'),
    h('img', {
      src: '/hot-air-balloon/32',
      alt: 'hot air balloon icon'
    }),
    h(Pre, {}, `<img src='https://icons.envoy.design/hot-air-balloon/32' alt='hot air balloon icon' />`),
    h('h3', {}, 'Color'),
    h('img', {
      src: '/hot-air-balloon/282c36',
      alt: 'hot air balloon icon'
    }),
    h(Pre, {}, `<img src='https://icons.envoy.design/hot-air-balloon/ff0000' alt='hot air balloon icon' />`)
  )
)

