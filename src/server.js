'use strict'

const Hapi = require('hapi')

const init = async () => {
  const server = Hapi.server({
    port: 3030,
    host: 'localhost'
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'The OMDB app is up and running.'
    }
  })
  await server.start()
  console.log('Server up on %s', server.info.uri)
}

/*
** The following complements DEP0018 by forcing uncaught promise rejections to crash the app.
** This can also be done viw mcollina's 'make-promises-safe' module.
*/
process.on('unhandledRejection', (err) => {
  console.error(err)
  process.exit(1)
})
/*
** Setup is complete. Execute the server init() command.
*/
init()
