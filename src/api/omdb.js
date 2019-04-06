'use strict'

const plugin = {
  name: 'omdb-api',
  version: '1.0.0',
  register: async (server, options) => {
    // Create a route for example

    server.route({
      method: 'GET',
      path: '/api/omdb',
      handler: function (request, h) {
        return 'hello, omdb'
      }
    })

    // etc...
    // await someAsyncMethods()
  }
}

module.exports = plugin
