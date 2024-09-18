module.exports = {
  // ... other config options
  async rewrites() {
    return [
      {
        source: '/projects/:projectName',
        destination: '/projects/[projectName]',
      },
    ]
  },
}