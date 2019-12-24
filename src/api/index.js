'use strict'

const Wreck = require('@hapi/wreck')
const Joi = require('@hapi/joi')
const Pkg = require('../../package.json')
const Boom = require('@hapi/boom')

const movieCall = async (key, title) => {
  try {
    const { payload } = await Wreck.get(`http://www.omdbapi.com/?apikey=${key}&t=${title}`)
    return payload
  } catch (err) {
    console.error(err)
    throw err
  }
}

const posterCall = async (key, id) => {
  try {
    const { res, payload } = await Wreck.get(`http://img.omdbapi.com/?apikey=${key}&i=${id}`)
    if (res.statusCode === 200 && payload.toString('ascii') === 'Error: Invalid API key!') throw Boom.unauthorized('Response Error: 401 Unauthorized')
    return payload
  } catch (err) {
    console.error(err)
    throw err
  }
}

const movieJson = {
  name: 'movieJson',
  version: Pkg.version,
  register: (server, options) => {
    server.route({
      method: 'GET',
      path: '/movie/{title?}',
      config: {
        validate: {
          params: {
            title: Joi.string().required()
          }
        }
      },
      handler: async (request, h) => h.response(await movieCall(process.env.BOT_KEY, request.params.title)).type('application/json')
    })
  }
}

const posterJpeg = {
  name: 'posterJpeg',
  version: Pkg.version,
  register: (server, options) => {
    server.route({
      method: 'GET',
      path: '/poster/{id?}',
      config: {
        validate: {
          params: {
            id: Joi.string().min(9).max(10).required()
          }
        }
      },
      handler: async (request, h) => h.response(await posterCall(process.env.BOT_KEY, request.params.id)).type('image/jpeg')
    })
  }
}

module.exports.movieJson = movieJson
module.exports.posterJpeg = posterJpeg
