'use strict'

const Wreck = require('@hapi/wreck')
const Joi = require('@hapi/joi')

let movieCall = async (key, title) => {
  const { req, res, payload } = await Wreck.get(`http://www.omdbapi.com/?apikey=${key}&t=${title}`)
  return payload
}

let posterCall = async (api, title) => {
  let id
  try {
    const movieJson = await movieCall(process.env.API_KEY, title)
    id = JSON.parse(movieJson)['imdbID']
  } catch (err) {
    console.error(err)
  } 
  // tried the img.omdbapi.com with the 't' parameter but their text search on that endpoint doesn't work just as fine
  const { req, res, payload } = await Wreck.get(`http://img.omdbapi.com/?apikey=${api}&i=${id}`)
  return payload
}

const plugin = {
  name: 'poster',
  version: '0.1.0',
  register: (server, options) => {
    server.route({
      method: ['GET', 'PUT', 'POST'],
      path: '/api/poster/{title?}',
      config: {
        validate: {
          params: {
            title: Joi.string().required()
          }
        }
      },
      handler: async (request, h) => {
        let findPoster
        try {
          findPoster = await posterCall(process.env.API_KEY, request.params.title)
        } catch (err) {
          console.error(err)
        }
        return h.response(findPoster).type('image/jpeg')
      }
    })
  }
}

module.exports = plugin
