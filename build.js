
// Node script for reading SVG icons and creating a paths JSON file

const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const geomiconsKeys = require('./geomicons-keys')


// Envoy Icons
const envoyDir = path.join(__dirname, 'icons')
const envoyFiles = fs.readdirSync(envoyDir)
  .filter(f => /\.svg$/.test(f))

// Simple Icons
const simpleDir = path.join(__dirname, 'node_modules', 'simple-icons#gh-pages', 'icons')
const simpleFiles = fs.readdirSync(simpleDir)
  .filter(f => /\.svg$/.test(f))

const mdKeys = [
  'action',
  'alert',
  'av',
  'communication',
  'content',
  'device',
  'editor',
  'file',
  'hardware',
  'image',
  'maps',
  'navigation',
  'notification',
  'places',
  'social',
  'toggle',
]

const mdDir = mdKeys.reduce((a, key) => {
  a[key] = path.join(__dirname, 'node_modules', 'material-design-icons', key, 'svg', 'production')
  return a
}, {})

const mdFilter = f => /24px\.svg$/.test(f)
const mdFiles = mdKeys.reduce((a, key) => {
  a[key] = fs.readdirSync(mdDir[key]).filter(mdFilter)
  return a
}, {})

const getPaths = $ => {
  const iterable = $('path')
  return iterable.map((i, el) => ({
    className: $(el).attr('class'),
    d: $(el).attr('d')
  })).get()
}

const getContents = dir => filename => fs.readFileSync(path.join(dir, filename), 'utf8')

const createPaths = dir => filenames => {
  const paths = filenames.map(f => {
    const svg = getContents(dir)(f)
    const root = cheerio.load(svg)
    const values = getPaths(root)
    const key = f.replace(/\.svg$/, '')
      .replace(/^ic_/, '')
      .replace(/_24px$/, '')

    return {
      key,
      values
    }
  })
  .reduce((a, b) => {
    a[b.key] = b.values
    return a
  }, {})

  return paths
}



const envoyPaths = createPaths(envoyDir)(envoyFiles)
const envoyJs = `module.exports = ${JSON.stringify(envoyPaths)}`
fs.writeFileSync('envoy-icons.js', envoyJs)
