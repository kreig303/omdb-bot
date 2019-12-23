'use strict'

const Wreck = require('@hapi/wreck')
const Joi = require('@hapi/joi')
const pkg = require('../../package.json')

const movieCall = async (key, title) => {
  const { payload } = await Wreck.get(`http://www.omdbapi.com/?apikey=${key}&t=${title}`)
  return payload
}

const plugin = {
  name: 'movie',
  version: pkg.version,
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
      handler: async (req, res) => {
        let findMovie
        try {
          findMovie = await movieCall(process.env.API_KEY, req.params.title)
        } catch (err) {
          console.error(err)
          throw (err)
        }
        return res.response(findMovie).type('application/json')
      }
    })
  }
}

module.exports = plugin
