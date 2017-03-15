// Node script for reading SVG icons and creating a paths JSON file
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')

// Envoy Icons
const envoyDir = path.join(__dirname, 'icons')
const envoyFiles = fs.readdirSync(envoyDir)
  .filter(f => /\.svg$/.test(f))

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
      .replace('garaje_slate-tt-48_', '')
      .replace('standard_slate-tt-48_', '')

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
