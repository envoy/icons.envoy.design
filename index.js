
const url = require('url')
const { createElement } = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
// const { Icon } = require('reline')
const Icon = require('./Icon')

const doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'

const num = v => !isNaN(parseFloat(v)) ? parseFloat(v) : v

const parseNumbers = obj => Object.keys(obj).reduce((a, key) => {
  const val = obj[key]
  const n = num(val)
  if (!isNaN(n)) {
    a[key] = n
  }
  return a
}, obj)

const isHex = val => {
  if (val.length !== 3 && val.length !== 6) return false
  return /[0-9a-fA-F]/.test(val)
}

const getParamKey = val => {
  const type = typeof val
  const n = num(val)
  if (!val.length) {
    return null
  } else if (isHex(val)) {
    return { color: '#' + val }
  } else if (!isNaN(n)) {
    return { size: n }
  } else if (type === 'string' && !/\-/.test(val)) {
    return { [val]: true }
  } else if (type === 'string' && /\-/.test(val)) {
    const [ key, v ] = val.split('-')
    return { [key]: num(v) }
  } else {
    console.log('could not parse', val)
    return null
  }
}

const parseUrl = url => {
  const [ , name, ...args ] = url.split('/')
  const params = args.reduce((a, b) => {
    const obj = getParamKey(b)
    return Object.assign({}, a, obj)
  }, {})
  params.name = name
  return params
}

module.exports = (req, res) => {
  const { pathname, query } = url.parse(req.url, true)
  const [ , name ] = pathname.split('/')
  const params = Object.assign(
    {
      size: 16
    },
    parseUrl(req.url),
    parseNumbers(query)
  )

  // console.log('params', params)

  if (!name) {
    return 'microicon'
  }

  const svg = doctype + renderToStaticMarkup(
    createElement(Icon, Object.assign({
      name,
    }, params))
  )

  res.setHeader('Content-Type', 'image/svg+xml')
  res.end(svg)
}
