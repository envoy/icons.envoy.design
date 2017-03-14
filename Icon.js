
const { createElement: h } = require('react')
const { Icon: Reline } = require('reline')
const Geomicon = require('react-geomicons').default
const geomiconsKeys = require('./geomicons-keys')
const relineKeys = require('./reline-keys')
const simplePaths = require('./simple-icons')
const mdPaths = require('./material-design-icons')
const envoyPaths = require('./envoy-icons')

const simpleKeys = Object.keys(simplePaths)
const mdKeys = Object.keys(mdPaths)
const envoyKeys = Object.keys(envoyPaths)

const Simple = ({
  name,
  size,
  color
}) => {
  const d = simplePaths[name]
  if (!d) return null

  return (
    h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 16 16',
      width: size,
      height: size,
      fill: color,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: '1.414',
    },
      h('path', {
        fillRule: 'nonzero',
        d
      })
    )
  )
}

const MD = ({
  name,
  size,
  color
}) => {
  const d = mdPaths[name]
  if (!d) return null

  return (
    h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: color
    },
      h('path', { d })
    )
  )
}

const Envoy = ({
  name,
  size,
  color
}) => {
  const d = envoyPaths[name]
  if (!d) return null

  return (
    h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 48 48',
      width: size,
      height: size,
      fill: color
    },
      h('style', {}, '.st0{fill:none}.st1{fill:#f9b6b3}.st2{fill:#ef4742}' ),
      h('path', { className: 'st0', d }),
      h('path', { className: 'st1', d: 'M45 32v8H2.97v-8H16.4l.22-.21A9.956 9.956 0 0 0 23.96 35c2.8 0 5.33-1.15 7.14-3H45z' }),
      h('path', {className: 'st2', d: 'M45 10h-1.98V8a1 1 0 0 0-1-1h-6.06a1 1 0 0 0-1 1v2H16.695l-1.031-3.298A.999.999 0 0 0 14.71 6h-7.5a1 1 0 0 0-.955.702L5.225 10H2.97a1 1 0 0 0-1 1v29a1 1 0 0 0 1 1H45a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zm-8.04-1h4.06v1h-4.06V9zM7.945 8h6.029l.625 2H7.32l.625-2zM5.96 12H44v19H33.182a10.923 10.923 0 0 0 1.778-6c0-6.065-4.935-11-11-11s-11 4.935-11 11c0 2.154.63 4.227 1.788 6H3.97V12h1.99zm9 13c0-4.962 4.038-9 9-9s9 4.038 9 9a8.931 8.931 0 0 1-2.575 6.301A8.917 8.917 0 0 1 23.96 34a8.898 8.898 0 0 1-6.605-2.889l-.001-.001A8.958 8.958 0 0 1 14.96 25zM3.97 39v-6H16.4v-.03A11.019 11.019 0 0 0 23.96 36a10.89 10.89 0 0 0 7.53-3H44v6H3.97z'}),
      h('path', { className: 'st2', d: 'M23.96 32a7.004 7.004 0 0 0 7-7c0-3.86-3.14-7-7-7s-7 3.14-7 7 3.14 7 7 7zm0-12c2.757 0 5 2.243 5 5a4.936 4.936 0 0 1-1.667 3.725l-.001.001A4.989 4.989 0 0 1 23.96 30c-2.757 0-5-2.243-5-5s2.243-5 5-5zM36.02 14h6v2h-6z' })
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

  if (simpleKeys.includes(name)) {
    return h(Simple, Object.assign({}, props, {
      name,
      size,
      color
    }))
  }

  if (relineKeys.includes(name)) {
    return h(Reline, Object.assign({}, props, {
      name,
      size,
      color
    }))
  }

  if (mdKeys.includes(name)) {
    return h(MD, Object.assign({}, props, {
      name,
      size,
      color
    }))
  }

  if (geomiconsKeys.includes(name)) {
    return h(Geomicon, Object.assign({}, props, {
      xmlns: 'http://www.w3.org/2000/svg',
      name,
      size,
      fill: color
    }))
  }

  return null
}

module.exports = Icon

