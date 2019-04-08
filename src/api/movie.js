'use strict'

const Wreck = require('@hapi/wreck')
const Joi = require('@hapi/joi')

let movieCall = async (key, title) => {
  const { req, res, payload } = await Wreck.get(`http://www.omdbapi.com/?apikey=${key}&t=${title}`)
  return payload
}

const plugin = {
  name: 'movie',
  version: '0.1.0',
  register: (server, options) => {
    server.route({
      method: ['GET', 'PUT', 'POST'],
      path: '/api/movie/{title?}',
      config: {
        validate: {
          params: {
            title: Joi.string().required()
          }
        }
      },
      handler: async (request, h) => {
        let findMovie
        try {
          findMovie = await movieCall(process.env.API_KEY, request.params.title)
        } catch (err) {
          console.error(err)
        }
        return h.response(findMovie).type('application/json')
      }
    })
  }
}

module.exports = plugin
