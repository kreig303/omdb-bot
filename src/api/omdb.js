'use strict'

const Wreck = require('@hapi/wreck')
const Joi = require('@hapi/joi')

let omdbCall = async (api, t) => {
  const { req, res, payload } = await Wreck.get(`http://www.omdbapi.com/?apikey=${api}&t=${t}`)
  console.log(payload.toString())
  return payload
}

const plugin = {
  name: 'omdb-api',
  version: '0.1.0',
  register: (server, options) => {
    server.route({
      method: ['GET', 'PUT', 'POST'],
      path: '/api/omdb/{title?}',
      config: {
        validate: {
          params: {
            title: Joi.string().required()
          }
        }
      },
      handler: async (request, h) => {
        console.log(request.params.title)
        try {
          return await omdbCall(process.env.API_KEY, request.params.title)
        } catch (ex) {
          console.error(ex)
        }
        return null
      }
    })
  }
}

module.exports = plugin
