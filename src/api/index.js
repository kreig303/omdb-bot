'use strict'

const Wreck = require('@hapi/wreck')
const Joi = require('@hapi/joi')
const Pkg = require('../../package.json')
const Boom = require('@hapi/boom')

const movieWreck = Wreck.defaults({})
const posterWreck = Wreck.defaults({})

const movieCall = async (key, title) => {
  const promise = movieWreck.request('GET', `/?apikey=${key}&t=${title}`, { baseUrl: 'http://www.omdbapi.com' })
  try {
    const res = await promise
    const body = await movieWreck.read(res, {})
    return body
  } catch (err) {
    console.error(err)
    throw err
  }
}

const posterCall = async (key, id) => {
  const promise = posterWreck.request('GET', `/?apikey=${key}&i=${id}`, { baseUrl: 'http://img.omdbapi.com' })
  try {
    const res = await promise
    const body = await posterWreck.read(res, {})
    if (res.statusCode === 200 && body.toString('ascii') === 'Error: Invalid API key!') throw Boom.unauthorized('Response Error: 401 Unauthorized')
    return body
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
          params: Joi.object({
            title: Joi.string().required()
          })
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
          params: Joi.object({
            id: Joi.string().min(9).max(10).required()
          })
        }
      },
      handler: async (request, h) => h.response(await posterCall(process.env.BOT_KEY, request.params.id)).type('image/jpeg')
    })
  }
}

module.exports.movieJson = movieJson
module.exports.posterJpeg = posterJpeg
