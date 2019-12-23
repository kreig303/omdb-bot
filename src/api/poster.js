'use strict'

const Wreck = require('@hapi/wreck')
const Joi = require('@hapi/joi')
const Pkg = require('../../package.json')

const posterCall = async (key, id) => {
  try {
    const { payload } = await Wreck.get(`http://img.omdbapi.com/?apikey=${key}&i=${id}`)
    return payload
  } catch (err) {
    console.error(err)
    throw err
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
      handler: async (request, h) => h.response(await posterCall(process.env.API_KEY, request.params.id)).type('image/jpeg')
    })
  }
}

module.exports.posterJpeg = posterJpeg
