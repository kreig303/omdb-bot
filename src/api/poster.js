'use strict'

const Wreck = require('@hapi/wreck')
const Joi = require('@hapi/joi')

let posterCall = async (key, id) => {
  try {
    const { payload } = await Wreck.get(`http://img.omdbapi.com/?apikey=${key}&i=${id}`)
    return payload
  } catch (err) {
    throw (err)
  }
}

const plugin = {
  name: 'poster',
  version: '0.1.0',
  register: (server, options) => {
    server.route({
      method: ['GET', 'PUT', 'POST'],
      path: '/api/poster/{id?}',
      config: {
        validate: {
          params: {
            id: Joi.string().min(9).max(10).required()
          }
        }
      },
      handler: async (request, h) => {
        let findPoster
        try {
          findPoster = await posterCall(process.env.API_KEY, request.params.id)
        } catch (err) {
          console.error(err)
        }
        return h.response(findPoster).type('image/jpeg')
      }
    })
  }
}

module.exports = plugin
