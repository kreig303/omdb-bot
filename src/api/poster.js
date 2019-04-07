'use strict'

const plugin = {
  name: 'poster-api',
  version: '1.0.0',
  register: async (server, options) => {
    // Create a route for example

    server.route({
      method: 'GET',
      path: '/api/poster',
      handler: function (request, h) {
        return `a poster with ${process.env.API_KEY}`
      }
    })

    // etc...
    // await someAsyncMethods()
  }
}

module.exports = plugin
