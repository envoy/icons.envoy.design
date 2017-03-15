const { createElement: h } = require('react')
const envoyPaths = require('./envoy-icons')
const Color = require('color')

const envoyKeys = Object.keys(envoyPaths)

const Envoy = ({
  name,
  size,
  color
}) => {
  const paths = envoyPaths[name]
  if (!Array.isArray(paths)) return null

  return (
    h('svg', {
      className: 'EnvoyIcon',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 48 48',
      width: size,
      height: size,
      fill: color
    },
      h('style', {}, `.st0{fill:none}.st1{fill:${Color(color).alpha(0.3).rgb()}}.st2{fill:${Color(color).rgb()}}` ),
      paths.map(({ className, d }, i) => {
        return h('path', { className, d, key: `key-${i}` })
      })
    )
  )
}

const Icon = (props) => {
  const {
    name,
    color,
    style,
    size = 16
  } = props

  if (envoyKeys.includes(name)) {
    return h(Envoy, Object.assign({}, props, {
      name,
      size,
      style,
      color
    }))
  }

  return null
}

module.exports = Icon
