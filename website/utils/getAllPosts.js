function importAll(r) {
  return r.keys().map(fileName => ({
    link: fileName.substr(1).replace(/\.mdx$/, ''),
    module: r(fileName)
  }))
  // .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const posts = importAll(
  require.context('../pages/blog/', true, /\.mdx$/)
)
