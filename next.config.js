const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withPlugins([
  withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    options: {
      rehypePlugins: [
        require('rehype-slug'),
        require('rehype-autolink-headings')
      ]
    }
  }),
  optimizedImages,
  {
    optipng: {
      optimizaionLevel: 3
    },
    svgo: true
  }
])
