'use strict'

require('dotenv').config()

const Hapi = require('@hapi/hapi')
const Boom = require('@hapi/boom')

if (!process.env.PORT || !process.env.BOT_KEY) {
  console.error('Missing .env variables. Exiting.')
  process.exit(1)
}

const server = Hapi.server({
  port: process.env.PORT,
  host: '0.0.0.0'
})

const addAPIs = async () => server.register([require('./api/').movieJson, require('./api/').posterJpeg], { routes: { prefix: '/api' } })

const init = async () => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'omdb-bot is available'
    }
  })
  server.route({
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return Boom.notFound()
    }
  })
  await addAPIs()
  await server.start()
  console.log(`Server up at ${server.info.uri}`)
}
/*
** Setup is complete. Execute the server init() command.
*/
init()
