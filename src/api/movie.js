'use strict'

const Wreck = require('@hapi/wreck')
const Joi = require('@hapi/joi')
const Pkg = require('../../package.json')

const movieCall = async (key, title) => {
  try {
    const { payload } = await Wreck.get(`http://www.omdbapi.com/?apikey=${key}&t=${title}`)
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

module.exports.movieJson = movieJson
