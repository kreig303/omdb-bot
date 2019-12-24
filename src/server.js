'use strict'

require('dotenv').config()

const Hapi = require('@hapi/hapi')
const Boom = require('@hapi/boom')

const appPort = process.env.PORT ? process.env.PORT : 8000

const server = Hapi.server({
  port: appPort,
  host: '0.0.0.0'
})

const addAPIs = async () => server.register([require('./api/movie').movieJson, require('./api/poster').posterJpeg], { routes: { prefix: '/api' } })

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
